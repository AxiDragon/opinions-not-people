import Message from "@/models/Message";
import { ALL_USERS, PLAYER } from "@/assets/users/users";
import { TextInput } from "react-native";
import { useUser } from "@/context/UserContext";
import Chat, { ChatHandle } from "../Chat";
import { useRef, useState } from "react";
import { COLORS } from "@/constants/colors";
import { Opinion } from "@/models/User";
import { setScreen } from "@/utility/EventDispatcher";
import IconSelector from "../IconSelector";
import OpinionRadioInput from "@/components/input/OpinionRadioInput";
import { isProduction } from "@/utility/testMode";

const IntroConversation: React.FC = () => {
	const { setName, name } = useUser();
	const [changedUsername, setChangedUsername] = useState<boolean>(false);
	const [pickedIcon, setPickedIcon] = useState<string>("-1");
	const [opinion, setOpinion] = useState<Opinion>(Opinion.NONE);
	const chatRef = useRef<ChatHandle>(null);

	const user = ALL_USERS.CAPTAIN;
	const maxNameLength = 15;

	const changeUsername = (name: string) => {
		if (name.length > maxNameLength) {
			name = name.substring(0, maxNameLength);
		}

		PLAYER.setName('Agent ' + name);
		setName(name);
		setChangedUsername(true);
	}

	const onOpinionSelect = (value: any) => {
		setOpinion(value);
		PLAYER.opinion = value;

		continueChat();
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

	const debugIntro: Message[] = [
		new Message({
			text: "My name is...", customContent: nameInput(),
			user: PLAYER,
			continueCondition: () => changedUsername,
		}),
		new Message({
			text: "",
			user: PLAYER,
			customContent: <IconSelector onSelect={setPickedIcon} />,
			continueCondition: () => pickedIcon !== "-1",
		}),
		new Message({
			text: "",
			customContent: <OpinionRadioInput onSelect={onOpinionSelect} />,
			continueCondition: () => opinion !== Opinion.NONE,
		}),
		new Message({ text: "Good luck, Agent.", user: user }),
	];

	const intro: Message[] = [
		new Message({ text: "Hi! Please note that this project is unfinished and abandoned." }),
		new Message({ text: "It aimed to make people aware of outgroup homogeneity bias, but really missed the mark." }),
		new Message({ text: "I'm just keeping it around since, despite its failures, it still taught me a lot." }),
		new Message({
			text: "If you want to view the final iteration, you can visit:\n https://axidragon.github.io/outgroup-odyssey/ \n (You're going to have to copy and paste that, sorry)",
		}),
		new Message({ text: "Enjoy!" }),
		new Message({ text: " " }),
		new Message({
			text: () => {
				const hours = new Date().getHours();

				if (hours < 5) {
					return "Good evening, Agent.";
				}
				if (hours < 12) {
					return "Good morning, Agent.";
				}
				if (hours < 18) {
					return "Good afternoon, Agent.";
				}

				return "Good evening, Agent.";
			},
			user: user,
		}),
		new Message({
			text: "I'm going to need your name.", user: user,
			customContent: nameInput(),
			continueCondition: () => changedUsername,
		}),
		new Message({ text: "...", user: user }),
		new Message({ text: "Okay.", user: user }),
		new Message({ text: "Which of these icons best represent you?", user: user }),
		new Message({
			text: "",
			user: PLAYER,
			customContent: <IconSelector onSelect={setPickedIcon} />,
			continueCondition: () => pickedIcon !== "-1",
		}),
		new Message({ text: "...", user: user }),
		new Message({ text: "Okay.", user: user }),
		new Message({ text: "I'm going to hand you a piece of paper asking for your opinion, for security reasons.", user: user }),
		new Message({ text: "There's not many of these papers left due to the new law regarding the discussion of this topic.", user: user }),
		new Message({ text: "So don't mess it up.", user: user }),
		new Message({ text: "And answer this truthfully.", user: user }),
		new Message({
			text: "",
			customContent: <OpinionRadioInput onSelect={onOpinionSelect} />,
			continueCondition: () => opinion !== Opinion.NONE,
		}),
		new Message({ text: "...", user: user }),
		new Message({ text: "Good.", user: user }),
		new Message({ text: "You're on the right side.", user: user }),
		new Message({ text: `${PLAYER.getName()}, we apprehended some people which we suspect might have views opposing ours.`, user: user }),
		new Message({ text: "Opposing those of the government, to be more exact.", user: user }),
		new Message({ text: "We're fairly certain at least one of them disagrees with us.", user: user }),
		new Message({ text: "But, as you know, the new law prohibits us from publically talking about the topic at hand.", user: user }),
		new Message({ text: "We need you to interrogate these suspects and use your biases to figure out who's right and who's wrong.", user: user }),
		new Message({ text: "We don't have much time, so you can only ask three questions per suspect.", user: user }),
		new Message({ text: "Figure out whether these suspects are on our side or not, whilst avoiding the topic itself.", user: user }),
		new Message({ text: "If they don't agree with you on the topic, have them jailed.", user: user }),
		new Message({ text: "If they do, let them go.", user: user }),
		new Message({ text: "Understood?", user: user }),
		new Message({ text: "...", user: user }),
		new Message({ text: "Good.", user: user }),
		new Message({ text: `Good luck, ${PLAYER.getName()}.`, user: user }),
		new Message({ text: "The government is watching.", user: user }),
	];

	return <Chat messages={isProduction() ? intro : debugIntro}
		ref={chatRef}
		onEnd={() => setScreen(1)} />;
}

export default IntroConversation;