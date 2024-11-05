import { COLORS } from "@/constants/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
	questions: string[];
	onSelect: (question: string) => void;
}

export default function QuestionSelector({ questions, onSelect }: Props) {
	return (
		<View style={styles.container}>
			{questions.map((question, i) => (
				<Pressable style={styles.pressable} key={i} onPress={() => onSelect(question)}>
					<Text style={styles.text}>
						{question}
					</Text>
				</Pressable>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	pressable: {
		padding: 20,
		width: "100%",
		margin: 5,
		borderRadius: 10,
		backgroundColor: COLORS.background,
	},
	text: {
		fontSize: 20,
		color: COLORS.text,
		textAlign: "center",
	}
})