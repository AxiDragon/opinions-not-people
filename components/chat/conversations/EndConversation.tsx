import Message from "@/models/Message";
import Chat from "../Chat";
import { getEnding } from "@/assets/data/endings";
import { ALL_USERS, PLAYER } from "@/assets/users/users";

const EndConversation: React.FC = () => {
	const ending = getEnding();

	function getImpressionMessage(fired: boolean): string {
		if (fired) {
			return "I can... understand why this was hard for you.";
		}
		return "You did do a decent job, though.";
	}

	function getDecisionMessages(fired: boolean) {
		let messageText: string[] = [];

		if (fired) {
			messageText = [
				`${PLAYER.getName()}, I'm going to have to fire you from your position.`,
				"We do not think you're fit to sort through these people.",
				"Whether it's because your assumptions are wrong.",
				"Whether it's because you're too nice.",
				"Whether it's because you're trying to break the system here.",
				"...",
				"It doesn't matter.",
				"I know you still agree with us.",
				"That you're on the right side.",
				"You're just not fit to be in a position of power.",
				"You can't tell right from wrong.",
				"...although I feel like 'right' and 'wrong' are rather blurry definitions anyways.",
				"Still.",
				"...",
				"Okay.",
				"I'm going to let you go now.",
				`Enjoy your life, ${PLAYER.getName()}.`,
				`Or - well. Just ${PLAYER.getName().replace(/^Agent\s/, "")} now, I suppose.`,
				"Goodbye.",
			];
		} else {
			messageText = [
				`${PLAYER.getName()}, we're keeping you on the team.`,
				"Congratulations.",
				"You can go home for the shift now.",
				"Thank you for making this place a bit more unison. A bit more stable.",
				"I'll see you around next time.",
			];
		}

		return messageText.map((text) => new Message({ text: text, user: ALL_USERS.CAPTAIN }));
	}

	const outro: Message[] = [
		new Message({ text: `Hey, ${PLAYER.getName()}.`, user: ALL_USERS.CAPTAIN }),
		new Message({ text: "Was it scary talking to people who might oppose your opinion?", user: ALL_USERS.CAPTAIN }),
		new Message({ text: "Was it difficult to tell those who agree and disagree apart?", user: ALL_USERS.CAPTAIN }),
		new Message({ text: "In any case, I've been tasked to review your performance.", user: ALL_USERS.CAPTAIN }),
		new Message({ text: "I'll be honest, it did look a lot tougher than I thought it would be.", user: ALL_USERS.CAPTAIN }),
		new Message({ text: "You can definitely assume some things based on hobbies and such, but whether those assumptions are correct is an entirely different question.", user: ALL_USERS.CAPTAIN }),
		new Message({ text: "Especially since the suspects had quite different lives.", user: ALL_USERS.CAPTAIN }),
		new Message({ text: getImpressionMessage(ending.fired), user: ALL_USERS.CAPTAIN }),
		new Message({ text: "But.", user: ALL_USERS.CAPTAIN }),
		new Message({ text: "...", user: ALL_USERS.CAPTAIN }),
		new Message({ text: "Okay.", user: ALL_USERS.CAPTAIN }),
		...ending.messages,
		new Message({ text: "But.", user: ALL_USERS.CAPTAIN }),
		new Message({ text: "...", user: ALL_USERS.CAPTAIN }),
		new Message({ text: "Okay.", user: ALL_USERS.CAPTAIN }),
		...getDecisionMessages(ending.fired),
	];

	return <Chat messages={outro} />;
}

export default EndConversation;
