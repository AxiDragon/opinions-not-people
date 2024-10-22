import 'react-native-gesture-handler';
import { ScrollView } from "react-native";
import MessageUI from "./MessageUI";
import styles from "@/app/style";
import { useCallback, useState } from "react";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import UserUI from './UserUI';
import { GRANT } from '@/app/models/User';

export default function Chat(props: { messages: string[] }) {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const user = GRANT;

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
			<UserUI user={user} />
			<GestureDetector gesture={tap}>
				<ScrollView contentContainerStyle={styles.chatContainer}>
					{props.messages.map((message, i) => (
						i <= currentMessageIndex && <MessageUI key={i} text={message} />
					))}
				</ScrollView>
			</GestureDetector>
		</GestureHandlerRootView>
	);
}