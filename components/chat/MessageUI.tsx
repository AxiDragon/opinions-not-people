import { Text, View, StyleSheet } from "react-native";
import Message from "@/models/Message";
import UserUI from "./UserUI";
import { COLORS } from "@/constants/colors";

type Props = {
	message: Message;
	show?: boolean;
	interactable?: boolean;
}

//TODO: Something with animations here
export default function MessageUI({ message, show = true, interactable = true }: Props) {
	const messageText = message.getText();

	return (
		<View style={[show ? styles.message : styles.hidden, !interactable && { pointerEvents: "none" }]}>
			{message.user && <UserUI user={message.user} />}
			<Text style={styles.messageText}>
				{messageText && messageText.trim().length !== 0 && messageText}
			</Text>
			<View style={styles.customContent}>
				{message.customContent}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	message: {
		backgroundColor: COLORS.messageBackground,
		borderColor: COLORS.messageBorder,
		borderWidth: 2,
		padding: 15,
		borderRadius: 10,
		width: "100%",
		maxWidth: 400,
	},
	messageText: {
		fontSize: 20,
		textAlign: "center",
		color: COLORS.text,
	},
	customContent: {
		width: "100%",
		alignItems: "center",
	},
	hidden: {
		display: "none",
	},
});