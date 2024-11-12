export function setScreen(screen: number) {
	window.dispatchEvent(new CustomEvent("setScreen", { detail: { screen } }));
}