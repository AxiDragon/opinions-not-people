import Message from "@/models/Message";
import Chat from "../Chat";
import { allUsers, PLAYER, users } from "@/assets/users/users";

enum EndingType {
	// higher ending types should take precedence
	ALL_RELEASED, // fired
	ALL_IMPRISONED, // not fired
	ALL_WRONG, // fired
	MORE_THAN_HALF_WRONG, // fired
	MORE_THAN_HALF_RIGHT, // not fired
}

const isEnding: { [ending in EndingType]: () => boolean } = {
	[EndingType.ALL_RELEASED]: function (): boolean {
		return users.every(user => user.playerOpinion === PLAYER.opinion);
	},
	[EndingType.ALL_IMPRISONED]: function (): boolean {
		return users.every(user => user.playerOpinion !== PLAYER.opinion);
	},
	[EndingType.ALL_WRONG]: function (): boolean {
		return users.every(user => user.playerOpinion !== user.opinion);
	},
	[EndingType.MORE_THAN_HALF_WRONG]: function (): boolean {
		let correctCount = 0;

		users.forEach(user => {
			if (user.playerOpinion === user.opinion) {
				correctCount++;
			}
		});

		return correctCount <= users.length / 2;
	},
	[EndingType.MORE_THAN_HALF_RIGHT]: function (): boolean {
		let correctCount = 0;

		users.forEach(user => {
			if (user.playerOpinion === user.opinion) {
				correctCount++;
			}
		});

		return correctCount > users.length / 2;
	}
}

const getEndingType = (): EndingType => {
	const endingTypes = Object.values(EndingType).filter(v => typeof v === 'number') as EndingType[];

	for (const endingType of endingTypes) {
		if (isEnding[endingType]()) {
			return endingType;
		}
	}

	console.error("No ending type found, this should not happen.");
	return EndingType.ALL_RELEASED;
}

const EndConversation: React.FC = () => {
	const ending = getEndingType();

	const messages: Message[] = [
		new Message({ text: "You have reached the end conversation.", user: allUsers.CAPTAIN }),
		new Message({ text: "The ending is: " + EndingType[ending], user: allUsers.CAPTAIN }),
	];

	return <Chat messages={messages} />;
}

export default EndConversation;