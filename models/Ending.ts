import { ALL_USERS } from "@/assets/users/users";
import Message from "./Message";

export enum EndingType {
	// higher ending types should take precedence
	ALL_RELEASED, // fired
	ALL_IMPRISONED, // not fired
	ALL_WRONG, // fired
	MORE_THAN_HALF_WRONG, // fired
	MORE_THAN_HALF_RIGHT, // not fired
}

type Props = {
	ending: EndingType;
	fired: boolean;
	endingCondition: () => boolean;
	messageText: string[]; //all messages should be spoken by the captain, so no need to specify the user
}

export default class Ending {
	public ending: EndingType = EndingType.ALL_RELEASED;
	public fired: boolean = false;
	public endingCondition: () => boolean = () => false;
	public messages: Message[] = [];

	constructor(props: Props) {
		this.ending = props.ending;
		this.fired = props.fired;
		this.endingCondition = props.endingCondition;
		this.messages = props.messageText.map((text) => new Message({ text: text, user: ALL_USERS.CAPTAIN }));
	}
}