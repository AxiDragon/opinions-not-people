import Message from "@/models/Message";
import { users } from "@/assets/users/users";
import { TextInput } from "react-native";
import LabeledSlider from "@/components/input/LabeledSlider";
import { useUser } from "@/context/UserContext";
import Chat, { ChatHandle } from "../Chat";
import { useEffect, useRef, useState } from "react";
import QuestionSelector from "../QuestionSelector";
import { getQuestions } from "@/assets/data/questions";
import { COLORS } from "@/constants/colors";

const IntroConversation: React.FC = () => {
	const { setName, name } = useUser();
	const [changedUsername, setChangedUsername] = useState<boolean>(false);
	const [opinion, setOpinion] = useState<number>(0.5);
	const [question, setQuestion] = useState<string>("");
	const [questions, setQuestions] = useState<string[]>(getQuestions(3));
	const changedUsernameRef = useRef(changedUsername);
	const opinionRef = useRef(opinion);
	const questionRef = useRef(question);
	const chatRef = useRef<ChatHandle>(null);

	const radicalMargin = 0.1;
	const indifferenceMargin = 0.05;

	const user = users.GRANT;
	const user2 = users.JASMIN;

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
				backgroundColor: COLORS.background,
				color: COLORS.text,
				padding: 10,
				marginTop: 5,
				textAlign: "center",
				// transform: [{ rotate: "3deg" }]
			}}
			placeholder="Put your name here!"
			onChangeText={changeUsername}
			onSubmitEditing={continueChat}
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
		new Message({ text: "My name is...", customContent: nameInput(), continueCondition: () => changedUsernameRef.current }),
		//TODO: Icon selection
		new Message({ text: "Nice to meet you, " + name + "!", user: user }),
		new Message({ text: "Hey, I'm going to ask your opinion on something.", user: user }),
		new Message({ text: "Do you agree or disagree with the following topic?", user: user }),
		new Message({ text: "Remember! You don't have to fully agree or disagree.", user: user }),
		new Message({
			text: "\"The government should reduce their military spending.\"",
			user: user,
			customContent: <LabeledSlider onValueChange={setOpinion} middleLabel="Neutral" />,
			continueCondition: () => opinionRef.current !== 0.5
		}),
		new Message({ text: getOpinionMessage(), user: user }),
		new Message({ text: "Anyways, I've got some questions for you!", user: user }),
		new Message({
			text: "Choose a question!",
			customContent: <QuestionSelector questions={questions}
				onSelect={(question: string) => {
					setQuestion(question);
					continueChat();
				}
				} />,
			continueCondition: () => questionRef.current !== ""
		}),
		...user.getAnswer(question),
		new Message({ text: `Hey, ${user2.getName()}, what do you think?`, user: user }),
		...user2.getAnswer(question),
		new Message({ text: `Anyways, back to you, ${user.getName()}!`, user: user2 }),
		new Message({ text: `Thanks ${user2.getName()}.`, user: user }),
		new Message({
			text: "Anyways, let me try something...", user: user,
			onContinue: () => {
				intro.push(new Message({ text: "This is a new message!", user: user }));
			},
			addsContentOnContinue: true
		}),
	];

	return <Chat messages={intro} ref={chatRef} />;
}

export default IntroConversation;