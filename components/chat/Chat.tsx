import 'react-native-gesture-handler';
import { ScrollView } from "react-native";
import MessageUI from "./MessageUI";
import styles from "@/assets/styling/style";
import { useCallback, useState } from "react";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import Message from '@/models/Message';

export default function Chat(props: { messages: Message[] }) {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

	//TODO: Maybe contemplate if this is the best way to handle this
	//it works for now though! I'll learn along the way
	const handleTap = useCallback(() => {
		if (currentMessageIndex < props.messages.length - 1) {
			setCurrentMessageIndex(currentMessageIndex + 1);
		}
	}, [currentMessageIndex, props.messages.length]);

	const tap = Gesture.Tap().onStart(handleTap);

	return (
		<GestureHandlerRootView>
			<GestureDetector gesture={tap}>
				<ScrollView contentContainerStyle={styles.chatContainer}>
					{props.messages.map((message, i) => (
						i <= currentMessageIndex && <MessageUI key={i} message={message} />
					))}
				</ScrollView>
			</GestureDetector>
		</GestureHandlerRootView>
	);
}