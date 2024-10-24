import 'react-native-gesture-handler';
import { ScrollView } from "react-native";
import MessageUI from "./MessageUI";
import styles from "@/assets/styling/style";
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
		if (currentMessageIndex < messages.length - 1) {
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
	return (
		<GestureHandlerRootView>
			<ScrollView contentContainerStyle={styles.chatContainer} ref={scrollViewRef}>
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