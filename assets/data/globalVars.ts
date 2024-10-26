export let username: string = "NAME NOT SET";

export function setUsername(name: string) {
	console.log('set username to ' + name);
	username = name;
}

export function getUsername() {
	console.log(username);
	return username;
}

export function hasSetUsername() {
	return username !== "NAME NOT SET";
}