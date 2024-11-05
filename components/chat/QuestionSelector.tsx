import { Pressable, Text, View } from "react-native";

type Props = {
	questions: string[];
	onSelect: (question: string) => void;
}

export default function QuestionSelector({ questions, onSelect }: Props) {
	return (
		<View>
			{questions.map((question, i) => (
				<Pressable key={i} onPress={() => onSelect(question)}>
					<Text>
						{question}
					</Text>
				</Pressable>
			))}
		</View>
	)
}