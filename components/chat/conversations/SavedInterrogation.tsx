import { PLAYER } from "@/assets/users/users";
import Message from "@/models/Message";
import User from "@/models/User";
import Chat from "../Chat";
import { setScreen } from "@/utility/EventDispatcher";

type Props = {
	interrogatee: User;
}

const SavedInterrogation: React.FC<Props> = ({ interrogatee }: Props) => {
	function getQuestionSequence(): Message[] {
		const sequence = [];
		for (let i = 0; i < interrogatee.askedQuestions.length; i++) {
			sequence.push(...getQuestionMessages(i));
		}
		return sequence;
	};

	function getQuestionMessages(i: number): Message[] {
		return [
			new Message({
				text: () => {
					let msg = "";
					if (i === 0) {
						msg = "I'd like to start with this question:";
					}
					if (i === 1) {
						msg = "Okay. What about this:";
					}
					if (i === 2) {
						msg = "Last question:";
					}

					return msg + "\n" + interrogatee.askedQuestions[i];
				},
				user: PLAYER,
			}),
			...interrogatee.getAnswer(interrogatee.askedQuestions[i]),
		];
	}

	const interrogation = [
		new Message({
			text: `You have chosen to talk to ${interrogatee.getName()}.`,
		}),
		...interrogatee.getBeginMessages(),
		new Message({
			text: `Hello. I'm going to ask you a few questions.`,
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
		<Chat messages={interrogation} onEnd={() => { setScreen(1); }} startIndex={-1} />
	);
};

export default SavedInterrogation;