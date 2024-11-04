import { Button, View } from "react-native";

type Props = {
	questions: string[];
	onSelect: (question: string) => void;
}

export default function QuestionSelector({ questions, onSelect }: Props) {
	return (
		<View>
			{questions.map((question, i) => (
				<Button key={i} title={question} onPress={() => onSelect(question)} />
			))}
		</View>
	)
}