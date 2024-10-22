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
	message: {
		backgroundColor: "#ffa173",
		padding: 10,
		borderRadius: 10,
	},
	messageText: {
		fontSize: 25,
	},
	userContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	username: {
		fontSize: 20,
		fontWeight: "bold",
	}
});

export default styles;