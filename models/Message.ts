import { ReactNode } from "react";
import User from "./User";

type MessageText = string | (() => string);

export default class Message {
	//TODO: Maybe add some 'continue' flag. When can the user continue the conversation?
	//f.e. when the user has to choose between two options, the user can only continue after choosing one.
	constructor(
		private _text: MessageText,
		public user?: User,
		public customContent?: ReactNode,
		public continueCondition: () => boolean = () => true,
		public onContinue?: () => void
	) { }

	getText(): string {
		if (typeof this._text === "string") {
			return this._text;
		} else {
			return this._text();
		}
	}
}