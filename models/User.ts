import images from "@/assets/data/imageMapping";
import Response from "./Response";
import Message from "./Message";

export default class User {
	private introMessages: Message[];
	public image;

	constructor(
		private name: string = "John",
		public color: string = "#dddddd",
		intro: string | string[] = "Hello, I'm John!",
		public responses: Response[] = [],
	) {
		this.image = images[name.toLowerCase()];

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