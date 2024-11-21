import Ending, { EndingType } from "@/models/Ending";
import { PLAYER, users } from "../users/users";

const ENDINGS = [
	new Ending({
		ending: EndingType.ALL_RELEASED,
		fired: true,
		endingCondition: () => users.every(user => user.playerOpinion === PLAYER.opinion),
		messageText: [
			"ALL_RELEASED",
		]
	}),
	new Ending({
		ending: EndingType.ALL_IMPRISONED,
		fired: false,
		endingCondition: () => users.every(user => user.playerOpinion !== PLAYER.opinion),
		messageText: [
			"ALL_IMPRISONED",
		]
	}),
	new Ending({
		ending: EndingType.ALL_WRONG,
		fired: true,
		endingCondition: () => users.every(user => user.playerOpinion !== user.opinion),
		messageText: [
			"ALL_WRONG",
		]
	}),
	new Ending({
		ending: EndingType.MORE_THAN_HALF_WRONG,
		fired: true,
		endingCondition: () => {
			let correctCount = 0;

			users.forEach(user => {
				if (user.playerOpinion === user.opinion) {
					correctCount++;
				}
			});

			return correctCount <= users.length / 2;
		},
		messageText: [
			"MORE_THAN_HALF_WRONG",
		]
	}),
	new Ending({
		ending: EndingType.MORE_THAN_HALF_RIGHT,
		fired: false,
		endingCondition: () => {
			let correctCount = 0;

			users.forEach(user => {
				if (user.playerOpinion === user.opinion) {
					correctCount++;
				}
			});

			return correctCount > users.length / 2;
		},
		messageText: [
			"MORE_THAN_HALF_RIGHT",
		]
	}),
];

export function getEnding(): Ending {
	for (const ending of ENDINGS) {
		if (ending.endingCondition()) {
			return ending;
		}
	}

	throw new Error("No ending found");
}

export default ENDINGS;