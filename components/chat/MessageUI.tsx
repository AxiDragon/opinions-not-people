import { Text, View, StyleSheet } from "react-native";
import Message from "@/models/Message";
import UserUI from "./UserUI";

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
		backgroundColor: "#ffa173",
		padding: 10,
		borderRadius: 10,
	},
	messageText: {
		fontSize: 25,
	},
});