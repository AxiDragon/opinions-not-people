import 'react-native-gesture-handler';
import { ScrollView } from "react-native";
import MessageUI from "./MessageUI";
import styles from "@/assets/styling/style";
import { useCallback, useState } from "react";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import Message from '@/models/Message';

type Props = {
	messages: Message[];
}

export default function Chat({ messages }: Props) {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

	//TODO: Maybe contemplate if this is the best way to handle this
	//it works for now though! I'll learn along the way
	const handleTap = useCallback(() => {
		if (currentMessageIndex < messages.length - 1) {
			setCurrentMessageIndex(currentMessageIndex + 1);
		}
	}, [currentMessageIndex, messages.length]);

	const tap = Gesture.Tap().onStart(handleTap);

	return (
		<GestureHandlerRootView>
			<GestureDetector gesture={tap}>
				<ScrollView contentContainerStyle={styles.chatContainer}>
					{messages.map((message, i) => (
						i <= currentMessageIndex && <MessageUI key={i} message={message} />
					))}
				</ScrollView>
			</GestureDetector>
		</GestureHandlerRootView>
	);
}