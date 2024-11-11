import User from "@/models/User";

export const users = {
	PNO: new User("PNO", undefined, ["Heya! I'm PNO!", "I'm PNO! I'm a robot to guide you through this game."],
		[
			{
				question: "What's your name?",
				answer: "My name is PNO! It means for 'People Not Opinions'!"
			},
			{
				question: "What hobbies do you have?",
				answer: ["Meeting new people is always fun.", "But also, I don't have hobbies because I'm not real!"]
			},
			{
				question: "Are you an agent of chaos?",
				answer: ["Maybe?", "I'm here to prevent chaos, though!"]
			},
			{
				question: "What's your favorite color?",
				answer: ["I'd say orange is nice!", "It's the color of my UI!"]
			},
			{
				question: "Do you have emotions?",
				answer: ["Well, no, but I pretend I do!", "...that's a bit sad, isn't it?"]
			},
		]
	),
	GRANT: new User("Grant", undefined, "Hey there. The name's Grant, nice to meet ya!",
		[
			{
				question: "What's your name?",
				answer: "The name's Grant!"
			},
			{
				question: "What hobbies do you have?",
				answer: ["I like to read and write.", "I also like to play games!"]
			},
			{
				question: "Are you an agent of chaos?",
				answer: ["I'm more of a neutral party.", "I like to keep things balanced."]
			},
			{
				question: "What's your favorite color?",
				answer: ["I like blue!", "It's a calming color."]
			},
			{
				question: "Do you have emotions?",
				answer: ["Of course! I'm a person, after all.", "I have a wide range of emotions."]
			},
		]
	),
	JASMIN: new User("Jasmin", undefined, "Hello! I'm Jasmin!",
		[
			{
				question: "What's your name?",
				answer: "I'm Jasmin!"
			},
			{
				question: "What hobbies do you have?",
				answer: ["I like to draw and paint.", "I also like to read books."]
			},
			{
				question: "Are you an agent of chaos?",
				answer: ["I don't think so.", "I like to keep things organized."]
			},
			{
				question: "What's your favorite color?",
				answer: ["I like pink!", "It's a cute color."]
			},
			{
				question: "Do you have emotions?",
				answer: ["Yes, I do.", "I have a lot of emotions."]
			},
		]
	),
	MARCO: new User("Marco", undefined, "Hey there! I'm Marco! I hope you are doing well.",
		[
			{
				question: "What's your name?",
				answer: "I'm Marco!"
			},
			{
				question: "What hobbies do you have?",
				answer: ["I like to play sports.", "I also like to travel."]
			},
			{
				question: "Are you an agent of chaos?",
				answer: ["I don't think so.", "I like to keep things calm."]
			},
			{
				question: "What's your favorite color?",
				answer: ["I like green!", "It's a refreshing color."]
			},
			{
				question: "Do you have emotions?",
				answer: ["Yes, I do.", "I'm usually a bit stoic, though."]
			},
		]
	),
	UNDEFINED: new User("Undefined", undefined, "I'm not sure what to say...",
		[
			{
				question: "What's your name?",
				answer: "I'm not sure what to say..."
			},
		]
	),
	DEFAULT: new User("Default", undefined, "I'm not sure what to say...",
		[
			{
				question: "What's your name?",
				answer: "I'm not sure what to say..."
			},
		]
	),
}