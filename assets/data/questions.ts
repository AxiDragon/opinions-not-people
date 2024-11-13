export const questions = [
	"What is your favorite way to spend a weekend?",
	"Have you picked up any new hobbies recently?",
	"Is there a hobby you've always wanted to try but haven't?",
	"What is your favorite hobby?",
	"What's one thing on your bucket list?",
	"What do you think is the most important quality in a friend?",
	"How do your values influence your daily decisions?",
	"What cause are you most passionate about, and why?",
	"Who is someone you look up to?",
	"What's a pivotal moment in your life that shaped who you are today?",
	"What is a travel experience that changed your perspective?",
	"What lesson have you learned from a past mistake?",
	"What's your idea of a perfect day?",
	"Do you have any unique quirks?",
	"What goal are you currently working on?",
	"How do you see your life five years from now?",
	"If you could change one thing about the world, what would it be?"
];

export function getQuestions(count: number): string[] {
	if (count > questions.length) {
		console.error("Not enough questions to get " + count + " questions.");
		return questions;
	}

	const shuffled = questions.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}