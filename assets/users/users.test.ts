import { USERS } from './users';
import User from '@/models/User';
import { questions } from '../data/questions';
import Response from '@/models/Response';

describe('Stop complaining', () => {
	test('should stop complaining', () => {
		expect(true).toBe(true);
	});
})

describe('User responses', () => {
	Object.values(USERS).forEach((user: User) => {
		describe(`User: ${user.getName()}`, () => {
			questions.forEach((question) => {
				test(`should have a response to the question: "${question}"`, () => {
					const response: Response | undefined = user.responses.find(r => r.question === question);
					expect(response).toBeDefined();
					expect(response && response.answer).toBeDefined();
				});
			});
		});
	});
});