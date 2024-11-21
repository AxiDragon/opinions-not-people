import { PLAYER } from "@/assets/users/users";
import Message from "@/models/Message";
import User from "@/models/User";
import { useMemo, useRef, useState } from "react";
import Chat, { ChatHandle } from "../Chat";
import QuestionSelector from "../QuestionSelector";
import { getQuestions } from "@/assets/data/questions";
import { setScreen } from "@/utility/EventDispatcher";
import { isProduction } from "@/utility/testMode";

type Props = {
	interrogatee: User;
	questionCount: number;
}

const Interrogation: React.FC<Props> = ({ interrogatee, questionCount }: Props) => {
	const questionsRef = useRef<string[]>([]);
	const [questions, setQuestions] = useState<string[]>(new Array(questionCount).fill(""));
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
				text: () => {
					if (i === 0) {
						return "I'd like to start with this question:";
					}
					if (i === 1) {
						return "Okay. What about this:";
					}
					if (i === 2) {
						return "Last question:";
					}

					throw new Error("Invalid question index");
				},
				user: PLAYER,
				continueCondition: () => questions[i] !== "",
				customContent: <QuestionSelector
					questions={questionsRef.current.slice(i * 3, i * 3 + 3)}
					onSelect={(question: string) => {
						setQuestions(answers => {
							const newAnswers = [...answers];
							newAnswers[i] = question;
							return newAnswers;
						});

						continueChat();
					}} />
			}),
			new Message({
				text: questions[i],
				user: PLAYER,
			}),
			...interrogatee.getAnswer(questions[i]),
		];
	}

	const continueChat = () => {
		if (chatRef.current) {
			chatRef.current.continueChat();
		}
	};

	const debugInterrogation = [
		new Message({
			text: `You are now talking with ${interrogatee.getName()}.`,
		}),
	]

	const interrogation = [
		new Message({
			text: `You are now talking with ${interrogatee.getName()}.`,
		}),
		...interrogatee.getBeginMessages(),
		new Message({
			text: `Hello ${interrogatee.getName()}. I'm going to ask you a few questions.`,
			user: PLAYER,
		}),
		new Message({
			text: "Answer them truthfully.",
			user: PLAYER,
		}),
		...interrogatee.getInformedMessage(),
		...getQuestionSequence(),
		new Message({
			text: "Alright. Thank you for your cooperation.",
			user: PLAYER,
		}),
	]

	return (
		<Chat messages={isProduction() ? interrogation : debugInterrogation}
			ref={chatRef}
			onEnd={() => {
				setScreen(1);
				interrogatee.askedQuestions = questions;
			}} />
	);
};

export default Interrogation;