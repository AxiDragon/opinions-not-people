import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	chatContainer: {
		display: "flex",
		padding: 20,
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 10,
		backgroundColor: "#f0f0f0",
	},
	textBubble: {
		backgroundColor: "#ffa173",
		padding: 10,
		borderRadius: 10,
	},
	textBubbleText: {
		fontSize: 25,
	},
});

export default styles;