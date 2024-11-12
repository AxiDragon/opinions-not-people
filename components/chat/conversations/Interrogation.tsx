import { PLAYER } from "@/assets/users/users";
import Message from "@/models/Message";
import User from "@/models/User";
import { useMemo, useRef, useState } from "react";
import Chat, { ChatHandle } from "../Chat";
import QuestionSelector from "../QuestionSelector";
import { getQuestions } from "@/assets/data/questions";
import { setScreen } from "@/utility/EventDispatcher";

type Props = {
	interrogatee: User;
	questionCount: number;
}

const Interrogation: React.FC<Props> = ({ interrogatee, questionCount }: Props) => {
	const player = PLAYER;
	const questionsRef = useRef<string[]>([]);
	const [answers, setAnswers] = useState<string[]>(new Array(questionCount).fill(""));
	const chatRef = useRef<ChatHandle>(null);

	useMemo(() => {
		questionsRef.current = getQuestions(questionCount * 3);
	}, []);

	function getQuestionSequence(): Message[] {
		const sequence = [];
		for (let i = 0; i < questionCount; i++) {
			sequence.push(...getQuestionMessages(i));
		}
		return sequence;
	};

	function getQuestionMessages(i: number): Message[] {
		return [
			new Message({
				text: "Question " + (i + 1),
			}),
			new Message({
				text: "",
				user: player,
				continueCondition: () => answers[i] !== "",
				customContent: <QuestionSelector
					questions={questionsRef.current.slice(i * 3, i * 3 + 3)}
					onSelect={(question: string) => {
						setAnswers(answers => {
							const newAnswers = [...answers];
							newAnswers[i] = question;
							return newAnswers;
						});

						continueChat();
					}} />
			}),
			...interrogatee.getAnswer(answers[i]),
		];
	}

	const continueChat = () => {
		if (chatRef.current) {
			chatRef.current.continueChat();
		}
	};

	const interrogation = [
		...interrogatee.getIntro(),
		new Message({
			text: `Hello ${interrogatee.getName()}, I'm ${player.getName()}. I'm going to ask you a few questions.`,
			user: player,
		}),
		...getQuestionSequence(),
		new Message({
			text: "That's all the questions I have for you. Thank you for your time.",
			user: player,
		}),
	]

	return (
		<Chat messages={interrogation} onEnd={() => setScreen(1)} ref={chatRef} />
	);
};

export default Interrogation;