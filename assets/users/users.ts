import User, { Opinion } from "@/models/User";

export const PLAYER = new User("Agent ???", Opinion.POSITIVE, "error");

export const ALL_USERS = {
	GRANT: new User("Grant", Opinion.NEGATIVE, "Hey, what's going on?", "Alright, I see.",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: [
					"I like getting into my workshop early and making real progress on my carvings—it's no good letting projects pile up.",
					"If someone needs help with their crafts, I'll step in, though I won't sugarcoat what they're doing wrong.",
					"By evening, I'm either playing games with the grandkids or teaching them that patience beats their gadgets any day."
				]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: [
					"I've been dabbling in crafting little puzzle boxes—great for keeping curious kids and grandkids entertained.",
					"It's tricky work, but it's satisfying to stump people with a clever design.",
					"Honestly, I'd say most people could use more puzzles in their life to keep their minds sharp."
				]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: [
					"I've thought about trying metalwork, but I'm not sure I have the patience for all that heating and hammering.",
					"Still, there's something about making tools or trinkets that sounds rewarding.",
					"Maybe I'll give it a shot if someone finally convinces me it's worth my time."
				]
			},
			{
				question: "What is your favorite hobby?",
				answer: [
					"Woodcarving is where my heart is, no question.",
					"Making little statues of people or critters reminds me that every detail matters, even the ones no one else notices.",
					"Besides, it's a great way to show folks what hard work and a sharp blade can achieve."
				]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: [
					"I'd like to carve a massive statue of my family to stand in the garden.",
					"It'd be a reminder of what really matters—and of all the times they've tested my patience!",
					"Plus, it'd outlast most of those flashy things people waste time on these days."
				]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: [
					"I'll take honesty over politeness any day.",
					"A real friend tells you when you're wrong or when your work looks sloppy, even if it stings.",
					"It's the only way anyone gets better at anything."
				]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: [
					"I stick to what I know is right, even if it ruffles feathers.",
					"For example, I'll teach someone how to carve properly, even if they're too stubborn to listen at first.",
					"Doing the right thing isn't always comfortable, but it's always worth it."
				]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: [
					"I care about keeping old crafts alive—none of that newfangled, flimsy stuff people buy and toss out.",
					"Crafting teaches patience, discipline, and pride in your work, and we're losing that.",
					"If I can pass those values down, I'll feel like I've done my part."
				]
			},
			{
				question: "Who is someone you look up to?",
				answer: [
					"There was a carver in my town when I was a kid who could make the wood practically breathe.",
					"He told me once, 'Don't waste wood on half-done work,' and that's stuck with me.",
					"I've tried to live up to his example, though I doubt I've matched him yet."
				]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: [
					"The first time I sold one of my carvings at a market was a big deal.",
					"Seeing someone value my work enough to pay for it made me realize I had something worth sharing.",
					"It's what pushed me to open my craft shop years later."
				]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: [
					"I visited a village where everyone made everything by hand, from tools to toys.",
					"It was refreshing to see people who took pride in real work instead of cutting corners.",
					"It reminded me that doing things right is always better than doing them fast."
				]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: [
					"I learned not to rush my work just to meet a deadline.",
					"Once, I finished a carving too quickly, and it broke within a week—embarrassing, to say the least.",
					"Now, I take the time to do it properly, no matter how impatient people get."
				]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: [
					"It starts with a quiet morning, strong coffee, and the birds outside.",
					"Then I'd spend the day in the shop, finishing a piece I've been working on for weeks.",
					"By evening, I'd gather the family for a meal and a good game—or two, if I'm winning!"
				]
			},
			{
				question: "Do you have any unique quirks?",
				answer: [
					"I've got a habit of slapping the table when I'm excited—scares the grandkids every time.",
					"I also whistle when I'm deep in thought, though I don't realize I'm doing it.",
					"My wife says it's like having a human teakettle around the house."
				]
			},
			{
				question: "What goal are you currently working on?",
				answer: [
					"I'm carving a set of statues for the local town square.",
					"It's my way of leaving something behind that'll outlast me.",
					"People need a reminder of the beauty in real craftsmanship, not just quick fixes."
				]
			},
			{
				question: "How do you see your life five years from now?",
				answer: [
					"I'll still be running my shop, no question about it.",
					"I'd like to have taught my grandkids enough to carry on some of my skills.",
					"And if I'm lucky, maybe I'll finally finish that family garden statue I've been dreaming of."
				]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: [
					"I'd get rid of all this throwaway culture—things are too cheap and meaningless these days.",
					"People should learn to fix and make things, not just toss them out for something new.",
					"It'd make the world a better, more thoughtful place."
				]
			},
			{
				question: "What's the best advice you've ever received?",
				answer: [
					"'If you're going to do something, do it right the first time,' was what my father used to say.",
					"It's why I never rush my carvings or accept half-baked work from anyone.",
					"That advice has stuck with me through thick and thin."
				]
			},
			{
				question: "What's something small that makes you happy?",
				answer: [
					"The sound of a perfectly sharp blade gliding through wood is music to my ears.",
					"It's proof that I've done the prep work right and that I'm in control of the craft.",
					"Simple things like that remind me why I love what I do."
				]
			},
			{
				question: "What have you done in the past week?",
				answer: [
					"I finished carving a new set of statues for a friend—took me longer than I wanted, but they're worth it.",
					"Hosted the monthly craft group and had to tell a few folks to stop slacking on their stitching.",
					"Oh, and I spotted a bird I hadn't seen in years. My wife was thrilled!"
				]
			},
			{
				question: "What do you usually do during working hours?",
				answer: [
					"I spend most of my time carving or fixing up the shop, though I'll drop everything to help a customer.",
					"If someone wants to chat, I'll talk, but I don't sugarcoat advice—it's the only way they'll improve.",
					"And if no one's around, I enjoy the quiet. It's good for thinking."
				]
			},
			{
				question: "What is something you can't stand?",
				answer: [
					"I can't stand when people don't take pride in their work.",
					"Sloppy, rushed efforts are a waste of time and resources, plain and simple.",
					"If you're going to do something, do it right—or don't do it at all."
				]
			},
			{
				question: "What is a pet peeve of yours?",
				answer: [
					"People leaving tools where they don't belong drives me up the wall.",
					"There's a place for everything, and it's not that hard to put things back.",
					"If I trip over one more misplaced mallet, someone's getting an earful!"
				]
			}
		]
	),
	JASMIN: new User("Jasmin", Opinion.NEGATIVE, "What do you need?", "Okay, okay.",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: [
					"Ideally, I'm out in the forest with my sketchbook, capturing whatever inspires me.",
					"If it's raining, my husband and I will work on puzzles or binge a show—we're pretty competitive with those puzzles, though!",
					"Later, we might meet up with friends for drinks, because weekends are too short to waste being boring."
				]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: [
					"I've been experimenting with making digital art—abstract, of course.",
					"It's a completely different medium, but I love the challenge of working without getting paint under my nails for once.",
					"It's not replacing my canvas work, though—traditional art is where my soul is."
				]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: [
					"Pottery has always intrigued me, but I don't know if I'd have the patience for it.",
					"The idea of shaping something with my hands, instead of a brush, sounds freeing in a way.",
					"Maybe one day I'll give it a shot—if I can find a studio that doesn't feel too pretentious."
				]
			},
			{
				question: "What is your favorite hobby?",
				answer: [
					"Creating art is more than a hobby for me—it's a lifeline.",
					"But if I'm not working, I really love a good crossword puzzle. It's like art for the brain!",
					"Plus, solving puzzles with my husband always leads to some playful arguments."
				]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: [
					"I want to host an outdoor art gallery right in the forest where I get so much inspiration.",
					"It'd be amazing to see how my work looks surrounded by the trees and sunlight.",
					"It might be a logistical nightmare, but the idea of it feels so right."
				]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: [
					"Loyalty, hands down. If you're my friend, I expect you to back me up.",
					"I don't have patience for people who play it safe or are too afraid to speak their mind.",
					"A real friend sticks by you, even when you're stirring the pot."
				]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: [
					"I believe in trusting my gut—if something feels wrong or right, I don't hesitate.",
					"I also think everyone should work for what they have, so I make sure I'm earning everything I enjoy.",
					"It's why I push myself to create art that actually says something."
				]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: [
					"Promoting art education is huge for me—it's where I found my voice when no one else believed in me.",
					"Too many people see art as a luxury when it's a necessity for expression and growth.",
					"If I can inspire just one person to pick up a brush, it's worth it."
				]
			},
			{
				question: "Who is someone you look up to?",
				answer: [
					"There's no one person, honestly—anyone who breaks the mold and stands by their vision earns my respect.",
					"I admire people who don't fold under pressure, even when the world tells them to conform.",
					"It's a trait I've always tried to embody myself."
				]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: [
					"When I sold my first painting, my parents called it a 'fluke' and told me not to get my hopes up.",
					"It was the moment I realized I didn't need their approval to succeed.",
					"That sale gave me the confidence to keep going, and now here I am."
				]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: [
					"Visiting an artist's retreat in the mountains was eye-opening—it was just artists, no distractions, and pure focus.",
					"It showed me how much of my best work comes when I'm completely immersed in my craft.",
					"It also reminded me how much I love coming back home to my husband afterward!"
				]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: [
					"I've learned not to let people's opinions hold me back, even when they come from someone I care about.",
					"Early on, I wasted time trying to make 'safe' art to please others, and it felt empty.",
					"Now, I trust myself and create for me first—if others like it, that's just a bonus."
				]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: [
					"A perfect day starts with coffee and a challenging puzzle—something that really makes me think.",
					"Then, I'd spend the afternoon painting outside, listening to the sounds of the forest.",
					"Finally, a quiet evening with my husband, maybe watching a show we both love. Bliss."
				]
			},
			{
				question: "Do you have any unique quirks?",
				answer: [
					"I hum when I'm focused—my husband thinks it's endearing, but it drives some of my friends crazy.",
					"Also, I can't leave a puzzle unfinished, even if it means staying up way too late.",
					"It's just who I am—I hate loose ends."
				]
			},
			{
				question: "What goal are you currently working on?",
				answer: [
					"I'm preparing a new series for a gallery exhibit—it's abstract, but this time I'm playing with more vibrant colors.",
					"It's a step outside my usual palette, and I'm excited to see how people react.",
					"The goal is to push boundaries, both for me and my audience."
				]
			},
			{
				question: "How do you see your life five years from now?",
				answer: [
					"Hopefully, my husband and I will have kids by then—it's something we're really looking forward to.",
					"I'd love to keep creating art that resonates with people and expands my reach.",
					"And maybe, just maybe, I'll finally finish that 5,000-piece puzzle we've been putting off!"
				]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: [
					"I'd make sure people have more access to the arts—it's something everyone should experience.",
					"Art has a way of showing people who they really are, and that's something the world needs more of.",
					"It'd be a better place if everyone had a little more creativity in their lives."
				]
			},
			{
				question: "What's the best advice you've ever received?",
				answer: [
					"'If you don't believe in yourself, no one else will,' was something I heard from a fellow artist.",
					"It's what pushed me to keep going when my family doubted me.",
					"Now, I remind myself of that every time I start doubting my work."
				]
			},
			{
				question: "What's something small that makes you happy?",
				answer: [
					"The smell of fresh paint always lifts my mood—it's like a signal that creation is about to happen.",
					"Also, solving a puzzle with my husband and seeing his face when I beat him—it never gets old.",
					"It's the little things that make life feel special."
				]
			},
			{
				question: "What have you done in the past week?",
				answer: [
					"I finished three pieces for an upcoming show—it was exhausting but worth it.",
					"My husband and I also tackled a tough crossword—it was one of those where every clue feels like a riddle.",
					"Oh, and I made a trip to the forest for some quick sketches—it always clears my mind."
				]
			},
			{
				question: "What do you usually do during working hours?",
				answer: [
					"It's all about the art—I'm either painting, planning my next piece, or cleaning up after the chaos.",
					"Sometimes I'll spend hours just staring at a canvas, waiting for the right idea to hit.",
					"Other times, I'll break up the day with a quick puzzle or some brainstorming with my husband."
				]
			},
			{
				question: "What is something you can't stand?",
				answer: [
					"I can't stand people who make excuses—it drives me up the wall.",
					"Everyone has challenges, but you either work through them or you don't. There's no in-between.",
					"It's why I have little patience for pity parties."
				]
			},
			{
				question: "What is a pet peeve of yours?",
				answer: [
					"People who touch my artwork without asking—it's beyond disrespectful.",
					"I also hate when someone interrupts me when I'm in the zone—it's like breaking a spell.",
					"If you see me working, just wait. I'll always make time to chat afterward."
				]
			}
		]
	),
	MARCO: new User("Marco", Opinion.POSITIVE, "Yo, what's up?", "'Kay, sounds good.",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: [
					"Hitting up the best clubs with my bros and just letting loose.",
					"The perfect weekend ends with me waking up with a hangover so bad I can barely remember the night.",
					"Bonus points if there's a story about me dancing on a table or pulling off some crazy stunt!"
				]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: [
					"Not really—law school takes up too much time for that, even if I don't put in much effort.",
					"But I have been trying to step up my drumming game whenever I'm at home.",
					"It's fun, loud, and honestly, it's great for clearing my head after a long week."
				]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: [
					"I'd love to learn how to DJ—it'd be so sick to be the guy controlling the vibe at a club.",
					"I mean, who wouldn't want to be the one making everyone lose their minds on the dance floor?",
					"Plus, I could probably pull off some cool tricks while spinning tracks."
				]
			},
			{
				question: "What is your favorite hobby?",
				answer: [
					"Going out and having a wild night, hands down.",
					"It's the perfect mix of energy, chaos, and just living in the moment.",
					"But when I'm not out, playing the drums is my jam—it's like my personal party at home."
				]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: [
					"I really want to take a party trip around the world and hit up the wildest clubs everywhere.",
					"Imagine reviewing each place for the vibes, drinks, and overall insanity—that'd be the dream.",
					"Who knows, maybe I could turn it into a career someday!"
				]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: [
					"Someone who knows how to have fun and isn't afraid to go all in.",
					"I need friends who can match my energy, whether it's dancing all night or pulling off crazy stunts.",
					"If they can handle my hangover rants the next day, even better."
				]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: [
					"I value living in the moment, so I try not to take life too seriously.",
					"If I have a choice between fun and responsibility… let's just say fun usually wins.",
					"That's probably why law school feels like such a drag most days!"
				]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: [
					"I'm passionate about making life less boring—people need to loosen up and have a good time.",
					"I think too many people stress about stuff that won't matter in the long run.",
					"If I can help others have fun and enjoy life more, I'd call that a win."
				]
			},
			{
				question: "Who is someone you look up to?",
				answer: [
					"I look up to influencers who've turned their love for partying into a career.",
					"It takes guts to carve out a life doing something unconventional and fun.",
					"Plus, they get to live the dream—having fun and making money at the same time."
				]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: [
					"The first time I went clubbing and realized how freeing it felt to just be myself.",
					"It was a night where nothing mattered—no grades, no expectations, just pure fun.",
					"That's when I decided life's too short to take too seriously."
				]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: [
					"I went on a weekend trip to a big city with my friends, and the nightlife was insane.",
					"It showed me how different people can be in other places—everyone was just so free-spirited.",
					"It made me want to explore more, to see what else is out there."
				]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: [
					"I've learned that you can't let people tell you what your life should look like.",
					"Trying to fit into what others expect only makes you miserable—believe me, I've tried.",
					"Now I focus on doing what feels right for me, even if it's not the 'safe' choice."
				]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: [
					"It starts with sleeping in, then a lazy afternoon jamming on my drums.",
					"At night, I'd hit up a club with my bros, and we'd party until sunrise.",
					"The perfect day ends with stories I'll barely remember and a hangover I'll never forget."
				]
			},
			{
				question: "Do you have any unique quirks?",
				answer: [
					"I have a habit of making up ridiculous nicknames for everyone—especially when I'm drunk.",
					"Also, I can't hear music without drumming along on whatever's nearby, even if it's a table.",
					"My friends say it's annoying, but I think it's part of my charm."
				]
			},
			{
				question: "What goal are you currently working on?",
				answer: [
					"I'm trying to build a social media presence—it's slow, but I think I've got potential.",
					"My goal is to start posting videos reviewing the nightlife in my city.",
					"Who knows, maybe it'll turn into something big someday."
				]
			},
			{
				question: "How do you see your life five years from now?",
				answer: [
					"I know I study law, but, hopefully, I'm not stuck in a law office—no offense to lawyers, but that's not me.",
					"I'd love to be traveling, partying, and getting paid to share my adventures online.",
					"Basically, living life to the fullest and not being tied down to a desk."
				]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: [
					"I'd make sure everyone had the chance to have a little fun without feeling guilty.",
					"Life's too short for endless stress and no play—it'd be a better world if we all partied more.",
					"Let's just say, I'd make it a lot more colorful and carefree."
				]
			},
			{
				question: "What's the best advice you've ever received?",
				answer: [
					"Someone once told me, 'You can always make money, but you can't make memories twice.'",
					"It hit me hard because it's so true—you've got to live for the moment.",
					"That advice pretty much fuels how I approach life now."
				]
			},
			{
				question: "What's something small that makes you happy?",
				answer: [
					"When I hit the perfect rhythm on my drums and it just clicks—man, that's satisfying.",
					"Oh, and that first sip of an ice-cold drink at the start of a night out.",
					"Sometimes, it's the little things that hype you up for the big ones."
				]
			},
			{
				question: "What have you done in the past week?",
				answer: [
					"Let's see—I partied twice, spent a day recovering from a brutal hangover, and jammed on my drums.",
					"I also showed up to a couple of law classes, mostly just to keep up appearances.",
					"And I've been brainstorming some ideas for my first nightlife review video."
				]
			},
			{
				question: "What do you usually do during working hours?",
				answer: [
					"Honestly? I try to survive my law classes without falling asleep.",
					"If I'm not in class, I'm either procrastinating on assignments or planning my next night out.",
					"Work hours aren't really my vibe—I'm more of a 'live for the night' kind of guy."
				]
			},
			{
				question: "What is something you can't stand?",
				answer: [
					"I can't stand people who take themselves too seriously—it's exhausting to be around them.",
					"Life's meant to be fun, not a constant competition over who's got it more together.",
					"Just relax and enjoy the ride—that's what I always say."
				]
			},
			{
				question: "What is a pet peeve of yours?",
				answer: [
					"When someone bails on plans last-minute—that really grinds my gears.",
					"Like, if you say you're in, you're in. Don't leave me hanging, bro.",
					"Also, I can't stand bad music at a party—it's a total buzzkill."
				]
			}
		]
	),
	HANNA: new User("Hanna", Opinion.NEGATIVE, "Uhm, hello?", "O-okay.",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: [
					"I love spending a weekend baking something simple and enjoying tea with friends.",
					"If I can, I'll also try to fit in some painting—decorating glassware always feels so calming.",
					"It's all about keeping the weekend peaceful and productive."
				]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: [
					"Not recently—I've been too focused on my studies.",
					"But I've been thinking about improving my writing skills, maybe journaling to start.",
					"It feels like something I could work on gradually, even with a busy schedule."
				]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: [
					"I've always been curious about pottery—it seems so creative yet structured.",
					"It's probably the kind of thing I'd love, but I've never had the chance to try it.",
					"Maybe one day, when life slows down a bit."
				]
			},
			{
				question: "What is your favorite hobby?",
				answer: [
					"Baking with friends is my favorite—it's fun and brings everyone together.",
					"I also really enjoy painting glassware—it's relaxing and lets me be creative.",
					"Both give me a sense of accomplishment, which I love."
				]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: [
					"I'd love to write an autobiography someday, about my life with my boyfriend.",
					"It's something I've dreamed of for a while, but I need more time to practice writing.",
					"It would be amazing to capture our story in my own words."
				]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: [
					"Reliability, hands down.",
					"I need to know that someone will stick by their word and be there when it matters.",
					"It's what makes friendships feel solid and trustworthy."
				]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: [
					"They guide everything I do—I always prioritize stability and consistency.",
					"I avoid unnecessary risks and make choices that align with my long-term goals.",
					"It's all about building a steady foundation for the future."
				]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: [
					"I'm passionate about education—it's the key to creating opportunities.",
					"Everyone deserves access to quality learning, and I think it shapes the way people see the world.",
					"It's a belief that comes from my own academic journey and how much it's impacted me."
				]
			},
			{
				question: "Who is someone you look up to?",
				answer: [
					"I really look up to my boyfriend—he's so grounded and supportive.",
					"He inspires me to stay focused and reminds me to take breaks when I need them.",
					"He's a huge part of why I feel confident about our future."
				]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: [
					"Skipping a year of school was a huge moment—it set me on a fast-paced track.",
					"It taught me that I could handle pressure, but also that I need balance.",
					"It's probably why I value stability so much now."
				]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: [
					"I haven't traveled much, but I did visit a research lab with my class once.",
					"Seeing the work being done there was eye-opening—it showed me what's possible in my field.",
					"It made me more determined to excel in biology."
				]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: [
					"I've learned not to overcommit myself—it's easy to burn out that way.",
					"There was a semester where I took on too much and ended up exhausted.",
					"Now, I try to be realistic about what I can handle."
				]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: [
					"A quiet day spent with my boyfriend, maybe starting with a morning walk.",
					"Then baking something delicious together and enjoying tea in the afternoon.",
					"Ending the day with a good book and some calm music would be perfect."
				]
			},
			{
				question: "Do you have any unique quirks?",
				answer: [
					"I always organize my books by how much I've learned from them—it's my own little system.",
					"I also tend to hum when I'm painting or baking, without realizing it.",
					"My friends find it amusing, but I guess it's just my way of staying focused."
				]
			},
			{
				question: "What goal are you currently working on?",
				answer: [
					"Right now, my main goal is excelling in my studies and preparing for exams.",
					"I'm also trying to make more time for my hobbies, especially writing.",
					"It's a challenge balancing everything, but I'm determined to manage it."
				]
			},
			{
				question: "How do you see your life five years from now?",
				answer: [
					"I hope to be married to my boyfriend and maybe have a little one on the way.",
					"Ideally, I'll be working part-time, with most of my focus on family and home life.",
					"Stability and happiness are what I'm aiming for."
				]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: [
					"I'd make sure everyone had access to basic education—it's such a foundation for everything else.",
					"It's heartbreaking to think of people who never get the chance to learn and grow.",
					"That's something I'd want to see changed."
				]
			},
			{
				question: "What's the best advice you've ever received?",
				answer: [
					"My mom once told me, 'Don't rush into life—just because you're ahead doesn't mean you need to sprint.'",
					"It's helped me when I feel overwhelmed by expectations.",
					"It reminds me that balance is just as important as achievement."
				]
			},
			{
				question: "What's something small that makes you happy?",
				answer: [
					"A quiet evening with my boyfriend, maybe just sipping tea and chatting.",
					"The smell of fresh baked cookies when I'm with my friends—it feels so comforting.",
					"Oh, and finding a perfectly written sentence in a book—it's like discovering a little treasure."
				]
			},
			{
				question: "What have you done in the past week?",
				answer: [
					"Mostly studying—I had a big exam coming up, so I've been hitting the books hard.",
					"I did make time to bake some muffins with a friend, though, which was a nice break.",
					"And my boyfriend and I spent an afternoon talking about our plans for the future—it was lovely."
				]
			},
			{
				question: "What do you usually do during working hours?",
				answer: [
					"I'm usually either in lectures or at the library, deep in my biology textbooks.",
					"When I'm not studying, I try to organize my notes or prepare for upcoming assignments.",
					"It's a lot, but I find satisfaction in staying on top of things."
				]
			},
			{
				question: "What is something you can't stand?",
				answer: [
					"I can't stand when people don't keep their promises—it feels disrespectful and careless.",
					"It's especially frustrating when it happens with group projects—it throws everything off.",
					"I think people should value consistency as much as I do."
				]
			},
			{
				question: "What is a pet peeve of yours?",
				answer: [
					"When someone interrupts me while I'm focused—it's like they've broken a delicate thread.",
					"Also, people who dismiss non-fiction as boring—that really irks me.",
					"I mean, real life has so much depth—why wouldn't you want to explore it?"
				]
			}
		]
	),
	KATE: new User("Kate", Opinion.POSITIVE, "Hey! What can I help you with?", "Oooookay...",
		[
			{
				question: "What is your favorite way to spend a weekend?",
				answer: [
					"I love spending a quiet weekend diving into a new game or learning something tech-related.",
					"But if a friend suggests going out for a drink, I'm all for it—I love those spontaneous moments.",
					"It's about balancing my alone time with meaningful connections."
				]
			},
			{
				question: "Have you picked up any new hobbies recently?",
				answer: [
					"I've started getting into digital art, mostly because it's relaxing and fun to experiment with.",
					"It's not something I'm amazing at yet, but I love the creative process.",
					"It's also a nice way to disconnect from the seriousness of work and activism."
				]
			},
			{
				question: "Is there a hobby you've always wanted to try but haven't?",
				answer: [
					"I've always wanted to try rock climbing—it seems like such a rush.",
					"I think I'd enjoy the challenge of it, but I've never gotten around to trying it.",
					"Maybe one day a friend will convince me to give it a shot."
				]
			},
			{
				question: "What is your favorite hobby?",
				answer: [
					"Spending time tinkering with tech is definitely my favorite—it feels so rewarding to figure things out.",
					"I also really enjoy exploring new games with my friends.",
					"It's nice to combine my love for technology with something social."
				]
			},
			{
				question: "What's one thing on your bucket list?",
				answer: [
					"I'd love to take a long trip to a tropical island with my wife and friends.",
					"Just disconnecting from everything and soaking up some sunshine sounds amazing.",
					"It's something I've been dreaming about for a while."
				]
			},
			{
				question: "What do you think is the most important quality in a friend?",
				answer: [
					"Loyalty is the most important quality to me.",
					"I've been through enough to know that people who stand by you, even when it's tough, are worth everything.",
					"It's a rare trait, and I cherish it deeply."
				]
			},
			{
				question: "How do your values influence your daily decisions?",
				answer: [
					"I try to approach life with empathy and fairness in mind, even when it's hard.",
					"My experiences have taught me the importance of standing up for myself and others.",
					"Everything I do, even online activism, reflects my values of equality and respect."
				]
			},
			{
				question: "What cause are you most passionate about, and why?",
				answer: [
					"Feminism is something I'm deeply passionate about—it's personal for me.",
					"I've faced discrimination and hardships, and I want to make sure others don't have to endure the same.",
					"Using my skills to support that cause gives me a sense of purpose."
				]
			},
			{
				question: "Who is someone you look up to?",
				answer: [
					"I really look up to my wife—she's been so supportive and patient through everything.",
					"She has this incredible strength and kindness that inspires me every day.",
					"She's shown me what unconditional love really looks like."
				]
			},
			{
				question: "What's a pivotal moment in your life that shaped who you are today?",
				answer: [
					"Coming out and dealing with the fallout was a defining moment for me.",
					"It was painful to lose connections, but it also made me stronger and more confident in myself.",
					"It taught me to value the people who truly stand by me."
				]
			},
			{
				question: "What is a travel experience that changed your perspective?",
				answer: [
					"I once went on a small road trip with friends—it wasn't anything fancy, but it reminded me of how freeing life can be.",
					"We visited small towns, tried new things, and just lived in the moment.",
					"It made me appreciate the little joys that come from breaking routine."
				]
			},
			{
				question: "What lesson have you learned from a past mistake?",
				answer: [
					"I learned not to keep silent when something feels wrong.",
					"In my first marriage, I stayed quiet about issues for too long, hoping things would fix themselves.",
					"Now, I know how important it is to speak up for yourself and your needs."
				]
			},
			{
				question: "What's your idea of a perfect day?",
				answer: [
					"A perfect day would start with a lazy morning at home, maybe watching something with my wife.",
					"In the afternoon, I'd meet up with friends for drinks or a new activity.",
					"Then, a cozy evening back home, just relaxing and feeling at peace."
				]
			},
			{
				question: "Do you have any unique quirks?",
				answer: [
					"I have a habit of talking to myself when I'm debugging something—it helps me think.",
					"I also always drink my coffee from the same mug; it feels like a tiny ritual.",
					"My friends tease me about it, but I think it's part of my charm."
				]
			},
			{
				question: "What goal are you currently working on?",
				answer: [
					"Right now, I'm focusing on helping organize this vacation with my friends.",
					"It's been a challenge getting everyone on the same page, but I'm determined to make it happen.",
					"It feels good to plan something fun and meaningful."
				]
			},
			{
				question: "How do you see your life five years from now?",
				answer: [
					"I see myself settled into a comfortable routine with my wife and continuing to explore new experiences together.",
					"I'd like to be in a better place emotionally, feeling more secure and confident.",
					"Maybe I'll have found a new passion or hobby to dive into."
				]
			},
			{
				question: "If you could change one thing about the world, what would it be?",
				answer: [
					"I'd make the world a more understanding and accepting place for everyone.",
					"It's heartbreaking how much harm is done by ignorance and prejudice.",
					"I think we'd all be happier if we treated each other with more kindness."
				]
			},
			{
				question: "What's the best advice you've ever received?",
				answer: [
					"Someone once told me, 'You can't please everyone, so focus on what makes you happy.'",
					"It stuck with me, especially after losing connections with people I thought I could count on.",
					"Now, I try to prioritize my happiness and the people who truly care about me."
				]
			},
			{
				question: "What's something small that makes you happy?",
				answer: [
					"When my wife surprises me with a cup of coffee while I'm working, it always makes my day.",
					"There's something so comforting about those small, thoughtful gestures.",
					"It's a reminder that I'm loved, even during the busiest moments."
				]
			},
			{
				question: "What have you done in the past week?",
				answer: [
					"This past week, I spent time helping my friends plan our long-overdue vacation.",
					"I also got caught up in a new online campaign for one of the causes I care about.",
					"Oh, and I finally tried out that recipe my wife suggested—it didn't turn out too bad!"
				]
			},
			{
				question: "What do you usually do during working hours?",
				answer: [
					"I spend most of my working hours coding or troubleshooting IT issues.",
					"It's a lot of problem-solving, but I find it pretty rewarding when things finally click.",
					"Sometimes, I'll have music on in the background to make the hours fly by."
				]
			},
			{
				question: "What is something you can't stand?",
				answer: [
					"I can't stand when people dismiss others' struggles without trying to understand them.",
					"It feels like such a waste of energy to judge instead of empathize.",
					"Everyone's carrying something, and we'd all be better off showing some kindness."
				]
			},
			{
				question: "What is a pet peeve of yours?",
				answer: [
					"People leaving things half-finished really gets under my skin.",
					"Whether it's a work project or cleaning up after themselves, it's frustrating when others don't follow through.",
					"I guess I value closure more than I realized!"
				]
			}
		]

	),
	CAPTAIN: new User("Captain", Opinion.NONE, "", "",
		[
			{
				question: "What's your name?",
				answer: "I'm not sure what to say..."
			},
		]
	),
	UNDEFINED: new User("Undefined", Opinion.NONE, "", "", [])
}
/**
 * users that will appear in the game 
 * Note: the order of the users in this array will determine the order in which they appear in the game
 * Reminder to myself to make the first user someone stereotypically "good" and the second user someone stereotypically "bad"
 * @type {User[]}
 */
export const USERS = [
	ALL_USERS.GRANT,
	ALL_USERS.KATE,
	ALL_USERS.JASMIN,
	ALL_USERS.MARCO,
	ALL_USERS.HANNA,
]