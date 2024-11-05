import Message from "@/models/Message";
import { PNO } from "@/models/User";
import { TextInput } from "react-native";
import LabeledSlider from "@/components/input/LabeledSlider";
import { useUser } from "@/context/UserContext";
import Chat, { ChatHandle } from "../Chat";
import { useEffect, useRef, useState } from "react";
import QuestionSelector from "../QuestionSelector";
import { getQuestions } from "@/assets/data/questions";

const IntroConversation: React.FC = () => {
	const { setName, name } = useUser();
	const [lockedInName, setLockedInName] = useState<boolean>(false);
	const [changedUsername, setChangedUsername] = useState<boolean>(false);
	const [opinion, setOpinion] = useState<number>(0.5);
	const [question, setQuestion] = useState<string | undefined>(undefined);
	const [questions, setQuestions] = useState<string[]>(getQuestions(3));
	const changedUsernameRef = useRef(changedUsername);
	const opinionRef = useRef(opinion);
	const questionRef = useRef(question);
	const chatRef = useRef<ChatHandle>(null);

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

	function getQuestionResponse(): string {
		if (question === "What's your name?") {
			return "PNO! It's People Not Opinions!";
		}
		if (question === "What hobbies do you have?") {
			return "Meeting new people is always fun. But also, I'm not real!";
		}
		if (question === "Are you an agent of chaos?") {
			return "Maybe? I'm here to prevent chaos, though!";
		}
		if (question === "What's your favorite color?") {
			return "I'd say orange is nice! It's the color of my UI!";
		}
		if (question === "Do you have emotions?") {
			return "Well, no, but I pretend I do! ...that's a bit sad, isn't it?";
		}
		return question + "? I don't know what to say about that! Like, this is an error message!";
	}

	const changeUsername = (name: string) => {
		setName(name);
		setChangedUsername(true);
	}

	//TODO: This is a bit of a hacky way to handle this
	useEffect(() => {
		changedUsernameRef.current = changedUsername;
	}, [changedUsername]);

	useEffect(() => {
		opinionRef.current = opinion;
	}, [opinion]);

	useEffect(() => {
		questionRef.current = question;
	}, [question]);

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

	const continueChat = () => {
		if (chatRef.current) {
			chatRef.current.continueChat();
		}
	};

	const intro: Message[] = [
		new Message("People not Opinions"),
		new Message("Hey there!", PNO),
		new Message("I'm PNO! I'm a robot to guide you through this game.", PNO),
		new Message("What is your name?", PNO),
		new Message("My name is...", undefined,
			nameInput(),
			() => changedUsernameRef.current,
			() => setLockedInName(true),
		),
		//TODO: Icon selection
		new Message("Nice to meet you, " + name + "!", PNO),
		new Message("Hey, I'm going to ask your opinion on something.", PNO),
		new Message("Do you agree or disagree with the following topic?", PNO),
		new Message("Remember! You don't have to fully agree or disagree.", PNO),
		//TODO: Lock slider after selection
		new Message("\"The government should reduce their military spending.\"", PNO,
			<LabeledSlider onValueChange={setOpinion} middleLabel="Neutral" />,
			() => opinionRef.current !== 0.5
		),
		new Message(getOpinionMessage(), PNO),
		new Message("Anyways, I've got some questions for you!", PNO),
		new Message("", undefined,
			<QuestionSelector questions={questions}
				onSelect={(question: string) => {
					setQuestion(question);
					continueChat();
				}
				} />,
			() => questionRef.current !== undefined
		),
		new Message(getQuestionResponse(), PNO),
	];

	return <Chat messages={intro} ref={chatRef} />;
}

export default IntroConversation;