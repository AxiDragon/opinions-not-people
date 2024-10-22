import { Text, View } from "react-native";
import styles from "@/app/style";

export default function MessageUI(props: { text: string }) {
	return (
		<View style={styles.message}>
			<Text style={styles.messageText}>{props.text}</Text>
		</View>
	);
}