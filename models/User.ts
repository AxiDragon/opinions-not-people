import Response from "./Response";
import Message from "./Message";
import getImage from "@/assets/data/imageMapping";

export enum Opinion {
	POSITIVE = "Positive",
	NEGATIVE = "Negative",
	NONE = "None",
}

export default class User {
	private beginMessages: Message[];
	private informedMessages: Message[];
	public playerOpinion: Opinion = Opinion.NONE;
	public image;
	public identified: boolean = false;
	//interrogation
	public askedQuestions: string[] = [];

	constructor(
		private name: string = "John",
		public opinion: Opinion,
		beginMessages: string | string[] = "What's going on?",
		informedMessages: string | string[] = "Okay. I understand.",
		public responses: Response[] = [],
	) {
		this.image = getImage(name.toLowerCase());

		if (Array.isArray(beginMessages)) {
			this.beginMessages = beginMessages.map((intro) => new Message({ text: intro, user: this }));
		}
		else {
			this.beginMessages = [new Message({ text: beginMessages, user: this })];
		}

		if (Array.isArray(informedMessages)) {
			this.informedMessages = informedMessages.map((informed) => new Message({ text: informed, user: this }));
		}
		else {
			this.informedMessages = [new Message({ text: informedMessages, user: this })];
		}
	}

	getBeginMessages(): Message[] {
		return this.beginMessages;
	}

	getInformedMessage(): Message[] {
		return this.informedMessages;
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