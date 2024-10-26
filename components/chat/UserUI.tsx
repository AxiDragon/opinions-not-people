import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";
import User from "@/models/User";

type Props = {
	user: User;
}

export default function UserUI({ user }: Props) {
	return (
		<View style={styles.userContainer}>
			<Image source={user.image} style={{ width: 64, height: 64 }} />
			<Text style={styles.username}>{user.name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
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