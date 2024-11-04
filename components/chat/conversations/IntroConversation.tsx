import Message from "@/models/Message";
import { PNO } from "@/models/User";
import { TextInput } from "react-native";
import LabeledSlider from "@/components/input/LabeledSlider";
import { useUser } from "@/context/UserContext";
import Chat from "../Chat";
import { useState } from "react";

const IntroConversation: React.FC = () => {
	let changedUsername: boolean = false;
	const [lockedInName, setLockedInName] = useState<boolean>(false)
	const { setName, name } = useUser();

	const changeUsername = (name: string) => {
		setName(name);
		changedUsername = true;
	}

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
			editable={!lockedInName}
		/>;
	}

	const intro: Message[] = [
		new Message("People not Opinions"),
		new Message("Hey there!", PNO),
		new Message("I'm PNO! I'm a robot to guide you through this game.", PNO),
		new Message("What is your name?", PNO),
		new Message("My name is...", undefined,
			nameInput(),
			() => changedUsername,
			() => setLockedInName(true)
		),
		//TODO: Icon selection
		new Message(() => "Nice to meet you, " + name + "!", PNO),
		new Message("Hey, I'm going to ask your opinion on something.", PNO),
		new Message("Do you agree or disagree with the following topic?", PNO),
		new Message("Remember! You don't have to fully agree or disagree.", PNO),
		new Message("\"The government should reduce their military spending.\"", PNO,
			<LabeledSlider onValueChange={(value) => { }} middleLabel="Neutral" />
		),
	];

	return <Chat messages={intro} />;
}

export default IntroConversation;