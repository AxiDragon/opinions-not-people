import User, { Opinion } from "@/models/User";

// export const PLAYER = new User("", Opinion.NONE, "Hey");

// Player for debugging
export const PLAYER = new User("???", Opinion.POSITIVE, "error");

export const allUsers = {
	PNO: new User("PNO", Opinion.POSITIVE, ["Heya! I'm PNO!", "I'm PNO! I'm a robot to guide you through this game."],
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
	GRANT: new User("Grant", Opinion.NEGATIVE, "Hey there. The name's Grant, nice to meet ya!",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: ["I love a peaceful weekend tending to my flowers and herbs in the garden,", "followed by a potluck dinner where we try out old family recipes."]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: ["Well, I recently tried my hand at birdwatching.", "There's something very relaxing about sitting quietly and waiting to see what might land nearby."]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: ["I've always wanted to learn how to do watercolor painting.", "I just love the softness of it, but I suppose I'm a bit nervous about making a mess!"]
			},
			{
				question: "What is your favorite hobby?",
				answer: ["Gardening.", "There's a calmness in working with the soil and watching things grow—it's like therapy, really."]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: ["I'd love to visit the countryside in England.", "It sounds so charming and full of history."]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: ["Consistency.", "I appreciate people who are there when you need them and don't change with the seasons."]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: ["They remind me to keep things simple and focus on what's important—family, friends, and taking care of what I have."]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: ["Supporting local businesses and community projects.", "I think there's so much value in keeping things local."]
			},
			{
				question: "Who is someone you look up to?",
				answer: ["My grandmother.", "She always had time for everyone, and her home was a place people could come to feel safe and loved."]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: ["Opening my craft shop.", "It taught me patience and the value of small, daily interactions with people."]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: ["I once visited an old friend's farm.", "It reminded me how important it is to live a life that's connected to the land."]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: ["Not to jump to conclusions.", "It's important to listen first before forming opinions."]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: ["A sunny day spent gardening, followed by a simple meal with my family", "and perhaps a crossword puzzle before bed."]
			},
			{
				question: "Do you have any unique quirks?",
				answer: ["I organize my pantry by color.", "I know it's odd, but it just feels right to me!"]
			},
			{
				question: "What goal are you currently working on?",
				answer: ["I'm compiling old family recipes into a cookbook for my grandkids."]
			},
			{
				question: "How do you see your life five years from now?",
				answer: ["Hopefully much the same—still in my garden and still surrounded by family."]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: ["I'd like people to spend more time appreciating the simple things."]
			}
		]
	),
	JASMIN: new User("Jasmin", Opinion.POSITIVE, "Hello! I'm Jasmin!",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: ["A morning at the farmers' market, followed by some time at the library.", "And maybe a family dinner to round off the day."]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: ["Yes! I've started experimenting with baking different kinds of bread, and it's incredibly satisfying."]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: ["I'd love to learn calligraphy.", "It just looks so elegant and peaceful."]
			},
			{
				question: "What is your favorite hobby?",
				answer: ["Reading mystery novels, for sure.", "I love trying to solve the mystery before it's revealed!"]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: ["I'd love to explore old castles and maybe do a bit of family history research."]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: ["Kindness.", "I think it's a trait that makes all other qualities shine a little brighter."]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: ["They keep me focused on treating others well, even in small ways.", "I think it's the little things that count most."]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: ["Helping at the local food bank.", "I think everyone deserves a warm meal, especially in hard times."]
			},
			{
				question: "Who is someone you look up to?",
				answer: ["My father.", "He taught me about hard work, humility, and showing kindness to everyone."]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: ["When my son came out to me.", "It taught me so much about love, acceptance, and what family really means."]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: ["Visiting a small coastal village once—it showed me how different people's lives can be,", "yet we're all so connected."]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: ["Sometimes saying nothing at all is the kindest response.", "I've learned the value of listening."]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: ["A cozy day spent reading, with some baking in the afternoon and a walk in the evening."]
			},
			{
				question: "Do you have any unique quirks?",
				answer: ["I have a habit of organizing my books by the color of their spine.", "It just feels right to me!"]
			},
			{
				question: "What goal are you currently working on?",
				answer: ["Perfecting my sourdough bread recipe—it's been a work in progress!"]
			},
			{
				question: "How do you see your life five years from now?",
				answer: ["I hope to be traveling more, maybe with a little caravan, exploring the countryside."]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: ["More empathy.", "I think we all need it, especially in challenging times."]
			}
		]
	),
	MARCO: new User("Marco", Opinion.NEGATIVE, "Hey there! I'm Marco! I hope you are doing well.",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: ["I love starting the weekend with a long hike.", "Then, cooking a big meal with family."]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: ["Yes, I've started knitting.", "It's surprisingly calming!"]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: ["I've always wanted to learn how to play the piano.", "But I haven't found the time yet."]
			},
			{
				question: "What is your favorite hobby?",
				answer: ["Cooking new recipes with fresh ingredients.", "Nothing beats a meal you've made from scratch."]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: ["I'd love to visit the mountains for a long, scenic hike."]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: ["Honesty.", "I think real friends tell you the truth, even when it's hard to hear."]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: ["They push me to stay grounded.", "My work is about helping others, and my values remind me why that matters."]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: ["Health and wellness.", "I think everyone deserves access to good healthcare."]
			},
			{
				question: "Who is someone you look up to?",
				answer: ["My aunt, who has been through so much.", "She remains one of the most resilient people I know."]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: ["Losing someone close to me.", "It taught me how precious time is with the people you love."]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: ["Seeing healthcare work in rural villages.", "It opened my eyes to how different life can be, even just a few hours away."]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: ["Don't overthink things you can't control.", "I'm learning to let go and trust that things will work out."]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: ["A day outdoors.", "Followed by a hearty meal with family and friends."]
			},
			{
				question: "Do you have any unique quirks?",
				answer: ["I carry a notebook everywhere I go.", "I like to jot down little things I notice."]
			},
			{
				question: "What goal are you currently working on?",
				answer: ["I'm working on improving my Spanish.", "It helps me communicate better with some of the families I support."]
			},
			{
				question: "How do you see your life five years from now?",
				answer: ["Hopefully, I'll be doing more traveling.", "And finding new ways to support the communities I care about."]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: ["I'd love to make healthcare accessible to everyone.", "No matter where they live."]
			}
		]
	),
	UNDEFINED: new User("Undefined", Opinion.NONE, "I'm not sure what to say...",
		[
			{
				question: "What's your name?",
				answer: "I'm not sure what to say..."
			},
		]
	),
	CAPTAIN: new User("Captain", Opinion.NONE, "I'm not sure what to say...",
		[
			{
				question: "What's your name?",
				answer: "I'm not sure what to say..."
			},
		]
	),
}
/**
 * users that will appear in the game 
 */
export const users = [
	allUsers.GRANT,
	allUsers.JASMIN,
	allUsers.MARCO,
]