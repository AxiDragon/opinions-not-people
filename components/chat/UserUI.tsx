import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";
import User from "@/models/User";
import { COLORS } from "@/constants/colors";

type Props = {
	user: User;
	darkened?: boolean;
}

export default function UserUI({ user, darkened = false }: Props) {
	return (
		<View style={styles.userContainer}>
			<Image source={user.image} tintColor={darkened ? 'black' : ''} style={{ width: 64, height: 64 }} />
			<Text style={styles.username}>{user.getName()}</Text>
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
		color: COLORS.text,
	}
});