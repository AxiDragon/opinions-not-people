import 'react-native-gesture-handler';
import { ScrollView } from "react-native";
import TextBubble from "./TextBubble";
import styles from "@/app/style";
import { useCallback, useEffect, useState } from "react";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";

export default function Chat(props: { messages: string[] }) {
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
						i <= currentMessageIndex && <TextBubble key={i} text={message} />
					))}
				</ScrollView>
			</GestureDetector>
		</GestureHandlerRootView>
	);
}