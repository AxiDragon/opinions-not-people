import { View, Text } from "react-native";
import { Image } from "expo-image";
import React from "react";
import User from "@/models/User";
import styles from "@/assets/styling/style";

export default function UserUI(props: { user: User }) {
	return (
		<View style={styles.userContainer}>
			<Image source={props.user.image} style={{ width: 64, height: 64 }} />
			<Text style={styles.username}>{props.user.name}</Text>
		</View>
	)
}