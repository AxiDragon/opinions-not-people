import Message from "@/models/Message";
import Chat from "../Chat";
import { getEnding } from "@/assets/data/endings";

const EndConversation: React.FC = () => {
	const ending = getEnding();

	const outro: Message[] = [
		...ending.messages,
	];

	return <Chat messages={outro} />;
}

export default EndConversation;