import { ReactNode } from "react";
import User from "./User";

type MessageText = string | (() => string);

type MessageParams = {
	/** The text content of a message */
	text: MessageText,
	/** The user/person associated with the message */
	user?: User,
	/** Custom content to be rendered after the text message */
	customContent?: ReactNode,
	/** When the conversation is allowed to continue */
	continueCondition?: () => boolean,
	/** What happens when the conversation continues */
	onContinue?: () => void,
	/** 
	 * If this message adds content on continue. 
	 * Important for the Chat component if this message can be the final message in the messages array.
	*/
	addsContentOnContinue?: boolean
}

export default class Message {
	private _text: MessageText;
	public user?: User;
	public customContent?: ReactNode;
	public continueCondition: () => boolean = () => true;
	public onContinue?: () => void;
	public addsContentOnContinue: boolean = false;

	constructor({ text, user, customContent, continueCondition = () => true, onContinue, addsContentOnContinue = false }: MessageParams) {
		this._text = text;
		this.user = user;
		this.customContent = customContent;
		this.continueCondition = continueCondition;
		this.onContinue = onContinue;
		this.addsContentOnContinue = addsContentOnContinue;
	}

	getText(): string {
		if (typeof this._text === "string") {
			return this._text;
		} else {
			return this._text();
		}
	}
}

export const EMPTY_MESSAGE = new Message({ text: "" });