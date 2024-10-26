import { Text, View, StyleSheet } from "react-native";
import Message from "@/models/Message";
import UserUI from "./UserUI";
import { COLORS } from "@/constants/colors";

type Props = {
	message: Message;
}

//TODO: Something with animations here

export default function MessageUI({ message }: Props) {
	return (
		<View style={styles.message}>
			{message.user && <UserUI user={message.user} />}
			<Text style={styles.messageText}>{message.getText()}</Text>
			{message.customContent}
		</View>
	);
}

//TODO: Make the UI here pretty
const styles = StyleSheet.create({
	message: {
		backgroundColor: COLORS.messageBackground,
		borderColor: COLORS.messageBorder,
		borderWidth: 2,
		padding: 15,
		borderRadius: 10,
		width: "100%",
		maxWidth: 300,
	},
	messageText: {
		fontSize: 20,
		textAlign: "center",
		color: COLORS.text,
	},
});