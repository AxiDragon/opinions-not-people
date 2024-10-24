import User from "./User";

export default class Message {
	constructor(public text: string, public user?: User, public messageType?: string) { }
}