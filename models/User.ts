import Response from "./Response";
import Message from "./Message";
import getImage from "@/assets/data/imageMapping";

export enum Opinion {
	POSITIVE = "Positive",
	NEGATIVE = "Negative",
	NONE = "None",
}

type InterrogationMessages = {
	//TODO: add more interrogation message types and update the interrogation sequence
	intro: string | string[];

}

export default class User {
	private introMessages: Message[];
	public playerOpinion: Opinion = Opinion.NONE;
	public image;
	public identified: boolean = false;
	//literally just for the draggable user
	public translateX: number = 0;
	public translateY: number = 0;

	constructor(
		private name: string = "John",
		public opinion: Opinion,
		intro: string | string[] = "Hello, I'm John!",
		public responses: Response[] = [],
	) {
		this.image = getImage(name.toLowerCase());

		if (Array.isArray(intro)) {
			this.introMessages = intro.map((intro) => new Message({ text: intro, user: this }));
		}
		else {
			this.introMessages = [new Message({ text: intro, user: this })];
		}
	}

	getIntro(): Message[] {
		return this.introMessages;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}

	getAnswer(question: string): Message[] {
		const qaItem = this.responses.find((qaItem) => qaItem.question === question);

		if (qaItem) {
			if (Array.isArray(qaItem.answer)) {
				return qaItem.answer.map((answer) => new Message({ text: answer, user: this }));
			}

			return [new Message({ text: qaItem.answer, user: this })];
		}
		else {
			return [new Message({ text: "I don't know what to say about that! This is an error!", user: this })];
		}
	}
}