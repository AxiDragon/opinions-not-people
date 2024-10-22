import { View, Text, Image } from "react-native";
import React from "react";
import User from "@/app/models/User";
import styles from "@/app/style";

export default function UserUI(props: { user: User }) {
	return (
		<View style={styles.userContainer}>
			<Image source={props.user.image} style={{ width: 64, height: 64 }} />
			<Text style={styles.username}>{props.user.name}</Text>
		</View>
	)
}