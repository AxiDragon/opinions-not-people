import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	chatContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	textBubble: {
		backgroundColor: "#ffa173",
		padding: 10,
		borderRadius: 10,
	},
	textBubbleText: {
		fontSize: 25,
	}
});

export default styles;