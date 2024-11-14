import User, { Opinion } from "@/models/User";

export const PLAYER = new User("Agent ???", Opinion.POSITIVE, "error");

export const allUsers = {
	PNO: new User("PNO", Opinion.POSITIVE, ["Heya! I'm PNO!", "I'm PNO! I'm a robot to guide you through this game."], "",
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
	GRANT: new User("Grant", Opinion.NEGATIVE, "Hey. What's going on?", "Okay. I understand.",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: [
					"I love a peaceful weekend tending to my flowers and herbs in the garden.",
					"There's something so fulfilling about watching things grow under my care, seeing a little seedling turn into something beautiful.",
					"After a few hours in the garden, I usually host a potluck dinner with friends and family.",
					"We all bring old family recipes or new dishes we're excited to try.",
					"It's a joy to share stories and memories over food, connecting in a way that only a shared meal can bring."
				]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: [
					"Recently, I've tried my hand at birdwatching, which has been surprisingly relaxing.",
					"There's something wonderful about sitting quietly with my binoculars, just waiting to see which birds will visit.",
					"I find myself captivated by the colors and songs of each bird, and I'm learning to identify a few of them by their calls.",
					"It's a reminder that there's so much beauty around us, especially in the small, often unnoticed things."
				]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: [
					"I've always wanted to learn watercolor painting.",
					"There's a softness and gentleness to watercolors that really appeals to me.",
					"I imagine capturing delicate flowers or landscapes in light washes of color, but I suppose part of me is a bit hesitant.",
					"I worry I might make a mess or that it won't come out as I envision.",
					"But maybe one day I'll give it a try, just for the joy of creating something new."
				]
			},
			{
				question: "What is your favorite hobby?",
				answer: [
					"Gardening is by far my favorite hobby.",
					"There's a therapeutic calmness in working with the soil and nurturing plants from tiny seeds to full bloom.",
					"It's a quiet, patient process, and I love that it teaches me to appreciate the small things, like the first sprout or a sudden burst of flowers.",
					"It's a space where I can let go of worries and simply enjoy the rhythm of nature, which has a way of grounding me."
				]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: [
					"Visiting the English countryside is at the top of my list.",
					"I've always been drawn to the idea of those picturesque villages, green rolling hills, and historical sites full of stories.",
					"There's a certain charm I imagine, walking through cobblestone streets lined with old cottages, perhaps with ivy creeping up the walls.",
					"I think there's something timeless about places like that, and I'd love to experience it firsthand, just wandering and taking it all in."
				]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: [
					"Consistency.",
					"To me, a true friend is someone who's there through thick and thin, who doesn't change with the seasons or vanish when things get tough.",
					"I value people who are steady and dependable, someone I can count on no matter the situation.",
					"Life can be so unpredictable, and having a friend who's a constant is one of the greatest comforts, like a safe harbor in any storm."
				]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: [
					"My values are like a guide, reminding me to keep things simple and focus on what's truly important—family, friendships, and taking care of the things and people I love.",
					"They shape how I spend my time and energy, encouraging me to choose quality over quantity, patience over haste, and kindness over conflict.",
					"I try to let these values direct me in ways that I hope bring a sense of peace to my life and to those around me."
				]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: [
					"I'm deeply passionate about supporting local businesses and community projects.",
					"I believe that local businesses give a place its character, and that when we support our own, we create a sense of belonging and resilience.",
					"Local shops and projects are often rooted in personal stories, hard work, and care for the community.",
					"Keeping things local just feels more human, more connected, and that's something I think is worth preserving."
				]
			},
			{
				question: "Who is someone you look up to?",
				answer: [
					"My grandmother.",
					"She had an incredible way of making everyone feel seen and valued, and her home was a refuge where people could come to feel safe and loved.",
					"She had a quiet strength, the kind of wisdom that only comes from a life full of compassion and resilience.",
					"I look up to her kindness, her patience, and her ability to make people feel at ease just by being herself."
				]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: [
					"Opening my craft shop was a defining moment for me.",
					"It was a leap of faith, something that took courage and taught me patience.",
					"Running a shop showed me the value of small, daily interactions—how each conversation, each exchange, no matter how small, builds connections.",
					"It shaped me into someone who sees the beauty in everyday moments, and who values the simple joys in life."
				]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: [
					"Visiting an old friend's farm had a profound impact on me.",
					"Spending time there reminded me of the importance of staying connected to the land and living a life that respects nature's rhythm.",
					"Seeing how my friend lived, growing his own food and caring for his animals, made me realize that a slower, more intentional life can bring so much fulfillment.",
					"It made me want to live in a way that's kinder to the earth."
				]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: [
					"One of the biggest lessons I've learned is not to jump to conclusions.",
					"In the past, I sometimes made assumptions too quickly, which led to misunderstandings.",
					"I've learned the importance of listening first and taking the time to understand others before forming opinions.",
					"It's not always easy, but I try to remind myself to be patient and keep an open mind."
				]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: [
					"A perfect day for me would be a sunny one spent in my garden, getting my hands in the soil and watching everything thrive.",
					"In the evening, I'd sit down to a simple meal with my family, sharing stories and laughter.",
					"Afterward, maybe I'd unwind with a good book or a crossword puzzle before heading to bed, feeling content and grateful for the day."
				]
			},
			{
				question: "Do you have any unique quirks?",
				answer: [
					"I organize my pantry by color.",
					"I know it sounds a bit odd, but for some reason, it just feels right to me!",
					"There's something calming about opening the pantry and seeing everything arranged in a way that's not only orderly but also visually pleasing.",
					"It's a small thing, but it brings me a little joy every time."
				]
			},
			{
				question: "What goal are you currently working on?",
				answer: [
					"I'm compiling a cookbook of old family recipes for my grandkids.",
					"I want to make sure these recipes are preserved, not just as instructions but as a piece of family history.",
					"Each recipe comes with memories, like the smell of my grandmother's kitchen or the laughter of family gatherings, and I hope these stories will be passed down along with the dishes."
				]
			},
			{
				question: "How do you see your life five years from now?",
				answer: [
					"Hopefully, not much will have changed.",
					"I see myself still living simply, surrounded by my family, with a thriving garden that I can escape to.",
					"I'd like to be in good health, enjoying time with my grandkids and maybe even teaching them some of the things I've learned along the way, like gardening or cooking."
				]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: [
					"I'd love for people to spend more time appreciating the simple things.",
					"In a world that's always rushing and pushing for more, I think we sometimes forget the beauty of a quiet moment, a warm meal, or a kind word.",
					"I believe that if more people could slow down and notice the small blessings, the world would be a gentler, more compassionate place."
				]
			}
		]
	),
	JASMIN: new User("Jasmin", Opinion.POSITIVE, "How may I help you?", "Alright - I understand.",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: [
					"A morning at the farmers' market, exploring all the fresh fruits, vegetables, and homemade goods.",
					"I love picking out a few fresh ingredients to cook with for the weekend.",
					"Then, I'll head to the library, where I can lose myself in the quiet aisles filled with books.",
					"There's something so calming about being surrounded by stories and ideas.",
					"And to top it all off, a family dinner with everyone gathered around the table, sharing laughs and catching up on the week."
				]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: [
					"Yes! I've started experimenting with baking different kinds of bread, which has become a little weekend ritual.",
					"I never realized how satisfying it would be to knead dough and see it rise in the oven.",
					"I've been trying out different recipes, from classic sourdough to sweet brioche.",
					"It's such a rewarding process, especially when the kitchen fills with that warm, fresh-baked bread smell."
				]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: [
					"I've always been fascinated by calligraphy.",
					"There's an elegance and calm to it that I find really appealing.",
					"I imagine it would take a lot of patience and practice to get those strokes just right.",
					"Seeing beautifully written words in flowing script feels almost like a kind of art."
				]
			},
			{
				question: "What is your favorite hobby?",
				answer: [
					"Reading mystery novels, without a doubt.",
					"I love the thrill of piecing together clues, trying to solve the mystery before it's revealed in the book.",
					"There's a sense of satisfaction in figuring it out, and even if I don't, it's always fun to see how the story unfolds.",
					"The suspense and clever twists keep me hooked every time."
				]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: [
					"I'd love to explore old castles and historical sites around Europe.",
					"I've always been fascinated by history and would love to walk through ancient halls and imagine what life was like back then.",
					"While I'm there, I'd also want to do a bit of family history research, to see if there's any connection to those places.",
					"I think it would be a journey of both discovery and appreciation."
				]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: [
					"Kindness is, to me, the most important quality in a friend.",
					"I think that kindness makes all other qualities shine a little brighter.",
					"Whether it's being there during hard times or simply showing small, thoughtful gestures, kindness really goes a long way.",
					"It's a quality that makes any friendship feel warm and safe, like you can truly be yourself without judgment."
				]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: [
					"My values are like a compass, keeping me grounded and focused on treating others well, even in the small, day-to-day moments.",
					"I try to be mindful of how my actions affect those around me, even if it's just offering a smile or a kind word.",
					"It's the little things, like showing respect and understanding, that I believe count most.",
					"Each choice I make feels more meaningful when it aligns with what I hold important in life."
				]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: [
					"I'm passionate about supporting our local food bank.",
					"I think everyone deserves a warm meal, especially in challenging times when some people might be struggling.",
					"It's a simple yet impactful way to help people in the community feel cared for.",
					"Volunteering there reminds me that, even in a small way, we can each make a difference in someone's life."
				]
			},
			{
				question: "Who is someone you look up to?",
				answer: [
					"My father has always been a huge influence in my life.",
					"He taught me about the importance of hard work and staying humble, no matter what.",
					"He had a way of showing kindness to everyone, treating each person he met with respect.",
					"It's a quality I admire deeply and try to carry forward in my own life."
				]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: [
					"When my son came out to me, it was a moment that changed how I viewed love and acceptance.",
					"It taught me so much about what family really means and the importance of embracing people for who they are.",
					"I realized that true love isn't about fitting into a mold; it's about supporting each other wholeheartedly.",
					"It's a lesson that continues to shape how I approach relationships in my life."
				]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: [
					"Visiting a small coastal village once had a profound impact on me.",
					"It showed me how vastly different people's lives can be, from their day-to-day routines to their traditions.",
					"And yet, there was a common thread—people there were just as connected to their families and communities as anywhere else.",
					"It reminded me of our shared humanity, despite how varied our lives might seem on the surface."
				]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: [
					"I've learned that sometimes, saying nothing at all is the kindest response.",
					"There have been times when I jumped to conclusions or reacted too quickly.",
					"Now, I try to listen first and think carefully before speaking, recognizing that silence can often be more supportive than words.",
					"It's taught me the value of patience and empathy in communication."
				]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: [
					"My perfect day would be a cozy one spent indoors with a good book, a cup of tea, and maybe a baking project in the afternoon.",
					"I'd bake something simple like cookies or a pie, filling the house with warmth and delicious smells.",
					"In the evening, I'd go for a gentle walk, enjoying the fresh air and reflecting on the day.",
					"It's the kind of simple, fulfilling day that leaves me feeling both relaxed and content."
				]
			},
			{
				question: "Do you have any unique quirks?",
				answer: [
					"I have a habit of organizing my books by the color of their spine, and I know it's a bit unusual.",
					"But for some reason, it just feels right to me—it's visually satisfying and makes my bookshelf feel like a piece of art.",
					"It's a small, quirky detail, but it brings a little bit of joy to my everyday routine.",
					"Plus, I think it adds a unique personality to my space."
				]
			},
			{
				question: "What goal are you currently working on?",
				answer: [
					"I'm focused on perfecting my sourdough bread recipe.",
					"It's been a work in progress, with a lot of trial and error, especially in getting the texture just right.",
					"I've started keeping a little journal to track what works and what doesn't, which has been fun.",
					"Each loaf brings me a step closer to that ideal sourdough with the perfect crust and chewy interior."
				]
			},
			{
				question: "How do you see your life five years from now?",
				answer: [
					"I hope to be traveling more, exploring the countryside and small towns with a little caravan.",
					"I imagine waking up to beautiful, peaceful landscapes and enjoying the simplicity of life on the road.",
					"It's a dream of freedom and discovery, where each day is a chance to experience something new.",
					"I'd love for this journey to be filled with moments of quiet reflection and new memories."
				]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: [
					"More empathy is something I think the world needs.",
					"In challenging times, it's easy to get caught up in our own struggles and overlook those of others.",
					"I believe that if we all took the time to understand one another's perspectives, it would make the world a kinder, more connected place.",
					"Empathy can bridge so many divides, bringing us together in ways that really matter."
				]
			}
		]
	),
	MARCO: new User("Marco", Opinion.NEGATIVE, "What's happening?", "Understood.",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: [
					"I love starting the weekend with a long hike.",
					"It helps me reset and enjoy nature.",
					"Then, I usually spend time cooking a big meal with family, sharing laughs and good food together."
				]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: [
					"Yes, I've started knitting.",
					"It's surprisingly calming, and I find it satisfying to create something from scratch.",
					"I've even managed to make a scarf or two!"
				]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: [
					"I've always wanted to learn how to play the piano.",
					"I think it would be so rewarding to play music.",
					"But I just haven't found the time to dedicate to learning yet."
				]
			},
			{
				question: "What is your favorite hobby?",
				answer: [
					"Cooking new recipes with fresh ingredients is my favorite hobby.",
					"Experimenting in the kitchen is so exciting!",
					"Nothing beats a meal you've made from scratch and can share with loved ones."
				]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: [
					"I'd love to visit the mountains for a long, scenic hike.",
					"The idea of spending days surrounded by natural beauty really appeals to me.",
					"I'd also love to camp out there and stargaze at night."
				]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: [
					"Honesty is essential to me in any friendship.",
					"I think real friends tell you the truth, even when it's hard to hear.",
					"It's not always easy, but it builds trust and respect."
				]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: [
					"My values keep me grounded and remind me why I do what I do.",
					"My work is about helping others, and my values remind me that every small act matters.",
					"They push me to stay true to myself, especially in challenging situations."
				]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: [
					"I'm most passionate about health and wellness.",
					"I believe that everyone deserves access to good healthcare.",
					"This passion drives me to support initiatives and organizations that aim to make healthcare accessible to all."
				]
			},
			{
				question: "Who is someone you look up to?",
				answer: [
					"My aunt is someone I truly look up to.",
					"She has been through so much in her life but has remained incredibly resilient.",
					"Her strength and kindness inspire me every day."
				]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: [
					"Losing someone close to me was a life-changing experience.",
					"It taught me to cherish every moment with loved ones.",
					"I now prioritize spending time with family and friends, as life is too short to take anything for granted."
				]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: [
					"Visiting rural villages and seeing healthcare work firsthand was eye-opening.",
					"It showed me how different life can be, even just a few hours away from a big city.",
					"This experience deepened my appreciation for resources we often take for granted."
				]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: [
					"One big lesson I've learned is to not overthink things that are out of my control.",
					"Sometimes, the best thing you can do is let go and trust that things will work out.",
					"I'm still practicing this, but it's been a valuable lesson."
				]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: [
					"My perfect day would start with a morning outdoors, maybe a hike or a walk.",
					"Then, I'd enjoy a hearty meal with family and friends.",
					"Just spending time together and sharing stories makes it all perfect."
				]
			},
			{
				question: "Do you have any unique quirks?",
				answer: [
					"I carry a notebook everywhere I go.",
					"I like to jot down little things I notice, ideas, or quotes I come across.",
					"It's become a habit that helps me keep track of small details that matter."
				]
			},
			{
				question: "What goal are you currently working on?",
				answer: [
					"I'm working on improving my Spanish skills.",
					"It's been great to learn, and it helps me communicate better with some of the families I support.",
					"Being able to connect more deeply through language is really fulfilling."
				]
			},
			{
				question: "How do you see your life five years from now?",
				answer: [
					"Hopefully, I'll be doing a lot more traveling, exploring different cultures.",
					"I'd also like to find new ways to support the communities I care about.",
					"Maybe I'll even be working in a field that combines travel and community outreach."
				]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: [
					"I would love to make healthcare accessible to everyone.",
					"There are so many people who don't have access to basic care, which I think is a fundamental right.",
					"No matter where someone lives, they deserve a chance to be healthy."
				]
			}
		]

	),
	UNDEFINED: new User("Undefined", Opinion.NONE, "I'm not sure what to say...", "",
		[
			{
				question: "What's your name?",
				answer: "I'm not sure what to say..."
			},
		]
	),
	CAPTAIN: new User("Captain", Opinion.NONE, "I'm not sure what to say...", "",
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