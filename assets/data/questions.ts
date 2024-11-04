export const questions = [
	"What's your name?",
	"What hobbies do you have?",
	"Are you an agent of chaos?",
	"What's your favorite color?",
	"Do you have emotions?"
]

export function getQuestions(count: number): string[] {
	const shuffled = questions.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}