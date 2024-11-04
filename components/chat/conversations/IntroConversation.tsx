import Message from "@/models/Message";
import { PNO } from "@/models/User";
import { TextInput } from "react-native";
import LabeledSlider from "@/components/input/LabeledSlider";
import { useUser } from "@/context/UserContext";
import Chat from "../Chat";
import { useEffect, useRef, useState } from "react";

const IntroConversation: React.FC = () => {
	const { setName, name } = useUser();
	const [lockedInName, setLockedInName] = useState<boolean>(false);
	const [changedUsername, setChangedUsername] = useState<boolean>(false);
	const [opinion, setOpinion] = useState<number>(0.5);
	const opinionRef = useRef(opinion);
	const changedUsernameRef = useRef(changedUsername);

	const radicalMargin = 0.1;
	const indifferenceMargin = 0.05;

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

	useEffect(() => {
		changedUsernameRef.current = changedUsername;
	}, [changedUsername]);

	useEffect(() => {
		opinionRef.current = opinion;
	}, [opinion]);

	const nameInput = () => {
		return <TextInput
			style={{
				fontSize: 20,
				backgroundColor: "#ffe6d4",
				padding: 10,
				borderRadius: 5,
				marginTop: 5,
				textAlign: "center",
			}}
			placeholder="Put your name here!"
			onChangeText={changeUsername}
			value={name}
			readOnly={lockedInName}
		/>;
	}

	const intro: Message[] = [
		new Message("People not Opinions"),
		new Message("Hey there!", PNO),
		new Message("I'm PNO! I'm a robot to guide you through this game.", PNO),
		new Message("What is your name?", PNO),
		new Message("My name is...", undefined,
			nameInput(),
			() => changedUsernameRef.current,
			() => setLockedInName(true)
		),
		//TODO: Icon selection
		new Message(() => "Nice to meet you, " + name + "!", PNO),
		new Message("Hey, I'm going to ask your opinion on something.", PNO),
		new Message("Do you agree or disagree with the following topic?", PNO),
		new Message("Remember! You don't have to fully agree or disagree.", PNO),
		new Message("\"The government should reduce their military spending.\"", PNO,
			<LabeledSlider onValueChange={setOpinion} middleLabel="Neutral" />,
			() => opinionRef.current !== 0.5
		),
		new Message(getOpinionMessage(), PNO),
	];

	return <Chat messages={intro} />;
}

export default IntroConversation;