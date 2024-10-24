import { View, Text } from "react-native";
import { Image } from "expo-image";
import React from "react";
import User from "@/models/User";
import styles from "@/assets/styling/style";

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