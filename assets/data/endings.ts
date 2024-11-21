import Ending, { EndingType } from "@/models/Ending";
import { PLAYER, USERS } from "../users/users";

const ENDINGS = [
	new Ending({
		ending: EndingType.ALL_RELEASED,
		fired: true,
		endingCondition: () => USERS.every(user => user.playerOpinion === PLAYER.opinion),
		messageText: [
			"I noticed that you let everyone go.",
			"Did you not care for their opinion?",
			"Or are you too sympathetic?",
			"You know the government wants strength through unity.",
			"And unity would be a lot easier if everyone just agreed with eachother.",
			"Admittedly, the easiest way to achieve that is to make the outliers submit.",
			"...",
			"Maybe there's more long-term benefits to a more gentle approach, though.",
			"Maybe you're onto something.",
		]
	}),
	new Ending({
		ending: EndingType.ALL_IMPRISONED,
		fired: false,
		endingCondition: () => USERS.every(user => user.playerOpinion !== PLAYER.opinion),
		messageText: [
			"I noticed that you imprisoned everyone.",
			"Did you not care for their opinion?",
			"Or are you just sadistic?",
			"You know the government wants strength through unity.",
			"But you can't have unity if there's no one left.",
			"We need to let those who agree with us go.",
			"We can't just lock everyone up.",
			"...",
			"I do suppose that by imprisoning everyone, you do ensure that no people who disagree with us are let go.",
			"Although, we do still need to differentiate between right and wrong, and let those who are right, go.",
		]
	}),
	new Ending({
		ending: EndingType.ALL_WRONG,
		fired: true,
		endingCondition: () => USERS.every(user => user.playerOpinion !== user.opinion),
		messageText: [
			"Clearly you aren't too good at assuming things.",
			"You managed to imprison all who agreed with you, and release all who disagreed with you.",
			"It's difficult. I saw it. The suspects are all rather unique. They had characteristics that would make sense if they agreed with you, but also if they disagreed with you.",
			"I really want to believe you made a genuine effort, but the higher-ups think that it's too unlikely for you to have accidentally made all the wrong choices.",
			"I'm not sure.",
			"But I can't take the risk here.",
			"The higher-ups would kill me if I didn't address this in one way or another.",
		]
	}),
	new Ending({
		ending: EndingType.MORE_THAN_HALF_WRONG,
		fired: true,
		endingCondition: () => {
			let correctCount = 0;

			USERS.forEach(user => {
				if (user.playerOpinion === user.opinion) {
					correctCount++;
				}
			});

			return correctCount <= USERS.length / 2;
		},
		messageText: [
			"This seemed a little tough for you.",
			"I can understand.",
			"The suspects were unique and they had characteristics that would make sense if they agreed with you, but also if they disagreed with you.",
		]
	}),
	new Ending({
		ending: EndingType.MORE_THAN_HALF_RIGHT,
		fired: false,
		endingCondition: () => {
			let correctCount = 0;

			USERS.forEach(user => {
				if (user.playerOpinion === user.opinion) {
					correctCount++;
				}
			});

			return correctCount > USERS.length / 2;
		},
		messageText: [
			"You did well.",
			"Even if all the suspects had potential reasons to agree or disagree with you, even if they were all unique people - you managed to figure it out.",
			"Impressive.",
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