export enum TestMode {
	PRODUCTION,
	TEST, // cuts down a lot of dialogue
}

export let testMode = TestMode.PRODUCTION;

export function isProduction(): boolean {
	return testMode === TestMode.PRODUCTION;
}