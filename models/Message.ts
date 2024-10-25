import { ReactNode } from "react";
import User from "./User";

export default class Message {
	//TODO: Maybe add some 'continue' flag. When can the user continue the conversation?
	//f.e. when the user has to choose between two options, the user can only continue after choosing one.
	constructor(
		public text: string,
		public user?: User,
		public customContent?: ReactNode) { }
}