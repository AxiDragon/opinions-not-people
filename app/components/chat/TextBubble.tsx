import { Text, View } from "react-native";
import styles from "@/app/style";

export default function TextBubble(props: { text: string }) {
	return (
		<View style={styles.textBubble}>
			<Text style={styles.textBubbleText}>{props.text}</Text>
		</View>
	);
}