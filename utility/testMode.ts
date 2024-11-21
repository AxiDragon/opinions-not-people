export enum TestMode {
	PRODUCTION,
	TEST, // cuts down a lot of dialogue
}

export let testMode = TestMode.TEST;

export function isProduction(): boolean {
	return testMode === TestMode.PRODUCTION;
}