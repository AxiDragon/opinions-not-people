export const questions = [
	"What's your name?",
	"What hobbies do you have?",
	"Are you an agent of chaos?",
	"What's your favorite color?",
	"Do you have emotions?",
	"What do you do for a living?",
	"What's your favorite food?",
	"What's your favorite movie?",
	"What's your favorite book?",
	"What's your favorite song?",
	"What's your favorite animal?",
	"What's your favorite game?",
	"What's your favorite TV show?",
]

export function getQuestions(count: number): string[] {
	if (count > questions.length) {
		console.error("Not enough questions to get " + count + " questions.");
		return questions;
	}

	const shuffled = questions.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}