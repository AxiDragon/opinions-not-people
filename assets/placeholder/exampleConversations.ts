import Message from "../../models/Message";
import { GRANT, PNO } from "../../models/User";

export const convo1: Message[] = [
	{
		text: "Hello! How are you doing today?",
		user: PNO,
	},
	{
		text: "I'm doing well, thank you for asking. How about you?",
		user: GRANT,
	},
	{
		text: "I'm doing well too. I'm glad to hear that you're doing well.",
		user: PNO,
	},
	{
		text: "I'm glad to hear that you're glad to hear that I'm doing well.",
		user: GRANT,
	},
];

export const convo1alt: Message[] = [
	{
		text: "It's a beautiful day today. PNO and Grant are having a conversation.",
	},
	{
		text: "Hello! How are you doing today?",
		user: PNO,
	},
	{
		text: "I'm doing well, thank you for asking. How about you?",
		user: GRANT,
	},
	{
		text: "I'm doing well too. I'm glad to hear that you're doing well.",
		user: PNO,
	},
	{
		text: "I'm glad to hear that you're glad to hear that I'm doing well.",
		user: GRANT,
	},
	{
		text: "Well, wasn't that a lovely conversation?",
	}
];


export const convo2: Message[] = [
	{
		text: "Hey there! Long time no see. How have you been?",
		user: PNO,
	},
	{
		text: "Hey! I've been pretty good, just busy with work. How about you?",
		user: GRANT,
	},
	{
		text: "Same here. Work has been hectic, but I'm managing. Any exciting projects?",
		user: PNO,
	},
	{
		text: "Yeah, actually. We're working on a new app that's supposed to revolutionize the way people interact with technology.",
		user: GRANT,
	},
	{
		text: "That sounds amazing! Can you tell me more about it?",
		user: PNO,
	},
	{
		text: "Sure! It's an AI-driven platform that helps users automate their daily tasks. We're still in the development phase, but the initial feedback has been great.",
		user: GRANT,
	},
	{
		text: "Wow, that sounds really innovative. I can't wait to see it in action. Do you have a launch date yet?",
		user: PNO,
	},
	{
		text: "We're aiming for a release by the end of the year. There's still a lot to do, but we're optimistic.",
		user: GRANT,
	},
	{
		text: "That's great to hear. I'm sure it will be a huge success. Let me know if you need any beta testers!",
		user: PNO,
	},
	{
		text: "Absolutely, I'll keep you in mind. Thanks for the support!",
		user: GRANT,
	},
	{
		text: "Anytime! So, what else have you been up to?",
		user: PNO,
	},
	{
		text: "Not much, just trying to balance work and personal life. It's been a challenge, but I'm getting there.",
		user: GRANT,
	},
	{
		text: "I hear you. It's important to find that balance. Do you have any plans for the weekend?",
		user: PNO,
	},
	{
		text: "I'm thinking of going hiking. It's been a while since I spent some time in nature.",
		user: GRANT,
	},
	{
		text: "That sounds like a great idea. Enjoy your hike!",
		user: PNO,
	},
	{
		text: "Thanks! What about you? Any plans?",
		user: GRANT,
	},
	{
		text: "I'm planning to catch up on some reading and maybe watch a movie or two.",
		user: PNO,
	},
	{
		text: "Sounds relaxing. Enjoy your weekend!",
		user: GRANT,
	},
	{
		text: "Thanks, you too!",
		user: PNO,
	},
];
