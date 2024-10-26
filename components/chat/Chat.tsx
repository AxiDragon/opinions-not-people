import 'react-native-gesture-handler';
import { ScrollView, StyleSheet } from "react-native";
import MessageUI from "./MessageUI";
import { useCallback, useEffect, useRef, useState } from "react";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import Message from '@/models/Message';

type Props = {
	messages: Message[];
}

export default function Chat({ messages }: Props) {
	const scrollViewRef = useRef<ScrollView>(null);
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

	//TODO: Maybe contemplate if this is the best way to handle this
	//it works for now though! I'll learn along the way
	const handleTap = useCallback(() => {
		if (messages[currentMessageIndex].continueCondition()
			&& currentMessageIndex < messages.length - 1) {
			setCurrentMessageIndex(currentMessageIndex + 1);
		}
	}, [currentMessageIndex, messages.length]);

	useEffect(() => {
		if (scrollViewRef.current) {
			scrollViewRef.current.scrollToEnd({ animated: true });
		}
	}, [currentMessageIndex]);

	const tap = Gesture.Tap().onStart(handleTap);

	//TODO: The last message still blocks scrolling due to GestureDetector - find a way to deal with that
	//TODO: See if there's a way to check if the previous message was from the same user and if so, don't show the UserUI
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
					i <= currentMessageIndex - 1 &&
					<MessageUI key={i} message={message} />
				))}
				<GestureDetector gesture={tap}>
					<MessageUI message={messages[currentMessageIndex]} />
				</GestureDetector>
			</ScrollView>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	chatContainer: {
		display: "flex",
		padding: 20,
		paddingBottom: 350,
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 15,
		width: "100%",
	},
});