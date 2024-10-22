import { ScrollView } from "react-native";
import TextBubble from "./TextBubble";
import styles from "@/app/style";

export default function Chat(props: { messages: string[] }) {
	return (
		<ScrollView contentContainerStyle={styles.chatContainer}>
			{props.messages.map((message, i) => (
				<TextBubble key={i} text={message} />
			))}
		</ScrollView>
	);
}