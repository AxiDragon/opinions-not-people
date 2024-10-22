import { Text, View } from "react-native";
import styles from "@/app/style";
import Message from "@/app/models/Message";
import UserUI from "./UserUI";

export default function MessageUI(props: { message: Message }) {
	return (
		<View style={styles.message}>
			<UserUI user={props.message.user} />
			<Text style={styles.messageText}>{props.message.text}</Text>
		</View>
	);
}