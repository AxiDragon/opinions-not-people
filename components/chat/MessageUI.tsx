import { Text, View, StyleSheet, Animated, Easing } from "react-native";
import Message from "@/models/Message";
import UserUI from "./UserUI";
import { COLORS } from "@/constants/colors";
import { useEffect, useRef, useState } from "react";

type Props = {
	message: Message;
	show?: boolean;
	interactable?: boolean;
}

const characterInterval = 30;
const pauseCharacter = 250;

const pauseCharacters = [".", ",", "!", "?"];

export default function MessageUI({ message, show = true, interactable = true }: Props) {
	const messageText = message.getText();
	const translateX = useRef(new Animated.Value(-1)).current;
	const [length, setLength] = useState(0);

	useEffect(() => {
		Animated.timing(translateX, {
			toValue: show ? 0 : -1,
			duration: 500,
			useNativeDriver: true,
			easing: Easing.out(Easing.poly(5)),
		}).start();

		if (!show) {
			setLength(0);
		}
	}, [show]);

	const getInterval = (text: string, length: number) => {
		if (length < 0) {
			length = 0;
		}

		const char = text[length];
		if (pauseCharacters.includes(char)) {
			return pauseCharacter;
		}

		return characterInterval;
	}

	useEffect(() => {
		const interval = setTimeout(() => {
			setLength(show ? length + 1 : 0);
		}, getInterval(messageText, length - 1));

		return () => clearTimeout(interval);
	}, [length, show]);


	const translateXPercent = translateX.interpolate({
		inputRange: [-1, 0],
		outputRange: ["-100%", "0%"],
	});

	return (
		<Animated.View style={[show ? styles.message : styles.hidden, { transform: [{ translateX: translateXPercent }] }, !interactable && { pointerEvents: "none" }]}>
			{message.user && <UserUI user={message.user} />}
			<Text style={styles.messageText}>
				{messageText && messageText.trim().length !== 0 && messageText.slice(0, length)}
			</Text>
			<View style={styles.customContent}>
				{message.customContent}
			</View>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	message: {
		backgroundColor: COLORS.messageBackground,
		borderColor: COLORS.interactables,
		padding: 20,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		overflow: 'hidden',
	},
	messageText: {
		fontSize: 20,
		textAlign: "center",
		color: COLORS.text,
		width: '90%',
	},
	customContent: {
		width: "100%",
		alignItems: "center",
	},
	hidden: {
		display: "none",
	},
});