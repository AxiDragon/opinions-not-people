import 'react-native-gesture-handler';
import { ScrollView, StyleSheet } from "react-native";
import MessageUI from "./MessageUI";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import Message from '@/models/Message';
import Tappable from '../input/Tappable';

type Props = {
	messages: Message[];
	onEnd?: () => void;
	/*
	 * The index of the message to start at
	 * -1 will display all messages 
	 */
	startIndex?: number;
}

export type ChatHandle = {
	continueChat: () => void;
}

const Chat = forwardRef<ChatHandle, Props>(({ messages, onEnd = () => { }, startIndex = 0 }: Props, ref) => {
	const scrollViewRef = useRef<ScrollView>(null);
	const [currentMessageIndex, setCurrentMessageIndex] = useState(startIndex === -1 ? messages.length - 1 : startIndex);
	const [conversationEnded, setConversationEnded] = useState(false);

	const handleTap = () => {
		if (messages[currentMessageIndex].continueCondition()) {
			continueChat();
		}
	};

	const continueChat = () => {
		if (currentMessageIndex < messages.length - 1 || messages[currentMessageIndex].addsContentOnContinue) {
			messages[currentMessageIndex].onContinue && messages[currentMessageIndex].onContinue();
			setCurrentMessageIndex(currentMessageIndex + 1);
		}
		else if (currentMessageIndex === messages.length - 1 && !conversationEnded) {
			onEnd();
			setConversationEnded(true);
		}
	};

	useImperativeHandle(ref, () => ({
		continueChat,
	}), [continueChat]);

	useEffect(() => {
		if (scrollViewRef.current && startIndex !== -1) {
			scrollViewRef.current.scrollToEnd({ animated: true });
		}
	}, [currentMessageIndex]);

	//TODO: The last message still blocks scrolling due to GestureDetector - find a way to deal with that
	//TODO: See if there's a way to check if the previous message was from the same user and if so, don't show the UserUI
	//TODO: Find a better way to handle this. just, for now, gotta tap the bottom one
	//TODO: Display 'Tap here to continue' only when the current message can be progressed
	return (
		<GestureHandlerRootView style={{
			flex: 1,
			width: 500,
			maxWidth: "100%",
		}}>
			<ScrollView
				contentContainerStyle={styles.chatContainer}
				ref={scrollViewRef}
				showsVerticalScrollIndicator={false}
			>
				{messages.map((message, i) => (
					<MessageUI key={i}
						message={message}
						show={i <= currentMessageIndex}
						interactable={i === currentMessageIndex} />
				))}
			</ScrollView>
			<Tappable onTap={handleTap} />
		</GestureHandlerRootView>
	);
});

const styles = StyleSheet.create({
	chatContainer: {
		display: "flex",
		paddingBottom: 300,
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 15,
		width: "100%",
	},
});

export default Chat;