export let username: string = "NAME NOT SET";

export function setUsername(name: string) {
	username = name;
}

export function getUsername() {
	return username;
}

export function hasSetUsername() {
	return username !== "NAME NOT SET";
}