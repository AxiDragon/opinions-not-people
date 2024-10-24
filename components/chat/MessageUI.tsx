import { Text, View } from "react-native";
import styles from "@/assets/styling/style";
import Message from "@/models/Message";
import UserUI from "./UserUI";

type Props = {
	message: Message;
}

export default function MessageUI({ message }: Props) {
	return (
		<View style={styles.message}>
			{message.user && <UserUI user={message.user} />}
			<Text style={styles.messageText}>{message.text}</Text>
			{message.customContent}
		</View>
	);
}