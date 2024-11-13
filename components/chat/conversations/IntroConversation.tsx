import Message from "@/models/Message";
import { allUsers, PLAYER } from "@/assets/users/users";
import { TextInput } from "react-native";
import LabeledSlider from "@/components/input/LabeledSlider";
import { useUser } from "@/context/UserContext";
import Chat, { ChatHandle } from "../Chat";
import { useRef, useState } from "react";
import { COLORS } from "@/constants/colors";
import { Opinion } from "@/models/User";
import { setScreen } from "@/utility/EventDispatcher";
import IconSelector from "../IconSelector";

const IntroConversation: React.FC = () => {
	const { setName, name } = useUser();
	const [changedUsername, setChangedUsername] = useState<boolean>(false);
	const [pickedIcon, setPickedIcon] = useState<boolean>(false);
	const [opinion, setOpinion] = useState<number>(0.5);
	const chatRef = useRef<ChatHandle>(null);

	const radicalMargin = 0.1;
	const indifferenceMargin = 0.05;

	const user = allUsers.GRANT;

	function getOpinionMessage(): string {
		if (opinion < radicalMargin || opinion > 1 - radicalMargin) {
			return "Wow - you seem to feel quite strongly about this. Maybe you want another topic?";
		};
		if (opinion < 0.5 + indifferenceMargin && opinion > 0.5 - indifferenceMargin) {
			return "You seem to be quite indifferent about this. Would you like a topic that's more engaging?";
		}

		return "Thank you for your opinion!";
	}

	const changeUsername = (name: string) => {
		setName(name);
		setChangedUsername(true);
	}

	function nameInput() {
		return <TextInput
			style={{
				fontSize: 20,
				backgroundColor: COLORS.background,
				color: COLORS.text,
				padding: 10,
				marginTop: 5,
				textAlign: "center",
			}}
			placeholder="Put your name here!"
			onChangeText={changeUsername}
			onSubmitEditing={() => {
				if (changedUsername) {
					continueChat();
				}
			}}
			value={name}
		/>;
	}

	const continueChat = () => {
		if (chatRef.current) {
			chatRef.current.continueChat();
		}
	};

	const intro: Message[] = [
		new Message({ text: "People not Opinions" }),
		...user.getIntro(),
		new Message({ text: "What is your name?", user: user }),
		new Message({
			text: "My name is...", customContent: nameInput(),
			continueCondition: () => changedUsername,
			onContinue: () => PLAYER.setName(name)
		}),
		//TODO: Icon selection
		new Message({ text: "Nice to meet you, " + name + "!", user: user }),
		new Message({
			text: "Select an Icon",
			customContent: <IconSelector onSelect={() => setPickedIcon(true)} />,
			continueCondition: () => pickedIcon,
		}),
		new Message({ text: "Hey, I'm going to ask your opinion on something.", user: user }),
		new Message({ text: "Do you agree or disagree with the following topic?", user: user }),
		new Message({ text: "Remember! You don't have to fully agree or disagree.", user: user }),
		new Message({
			text: "\"The government should reduce their military spending.\"",
			user: user,
			customContent: <LabeledSlider onValueChange={setOpinion} middleLabel="Neutral" />,
			continueCondition: () => opinion !== 0.5,
			onContinue: () => {
				PLAYER.playerOpinion = opinion < 0.5 ? Opinion.NEGATIVE : Opinion.POSITIVE;
			}
		}),
		new Message({ text: getOpinionMessage(), user: user }),
	];

	return <Chat messages={intro}
		ref={chatRef}
		onEnd={() => setScreen(1)} />;
}

export default IntroConversation;