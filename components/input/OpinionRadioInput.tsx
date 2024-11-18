import { COLORS } from "@/constants/colors";
import { Opinion } from "@/models/User";
import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

type Props = {
	onSelect: (value: Opinion) => void;
}

const OpinionRadioInput = ({ onSelect }: Props) => {
	const [selected, setSelected] = useState<Opinion>(Opinion.NONE);

	const handlePress = (value: any) => {
		setSelected(value);
		onSelect(value);
	}

	return (
		<ImageBackground source={require("@/assets/images/paper.png")} style={styles.background}>
			<View style={styles.container}>
				<Text style={styles.header}>Same-sex marriage should be legal.</Text>
				<View style={styles.radioButtonContainer}>
					<View style={styles.radioButton}>
						<RadioButton
							value={Opinion.POSITIVE}
							status={selected === Opinion.POSITIVE ? "checked" : "unchecked"}
							onPress={() => handlePress(Opinion.POSITIVE)}
							color={COLORS.backgroundDark} />
						<Text style={styles.text}>Agree</Text>
					</View>
					<View style={styles.radioButton}>
						<RadioButton
							value={Opinion.NEGATIVE}
							status={Opinion.NEGATIVE === selected ? "checked" : "unchecked"}
							onPress={() => handlePress(Opinion.NEGATIVE)}
							color={COLORS.backgroundDark} />
						<Text style={styles.text}>Disagree</Text>
					</View>
				</View>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		transform: [{ rotate: "-1.5deg" }]
	},
	radioButtonContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		paddingHorizontal: 25,
	},
	text: {
		color: COLORS.backgroundDark,
		fontSize: 16,
		textAlign: "center",
		fontWeight: "bold",
		flex: 1,
	},
	header: {
		color: COLORS.backgroundDark,
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold",
	},
	background: {
		flex: 1,
		justifyContent: "center",
		width: "100%",
		height: "100%",
		padding: 25,
		transform: [{ rotate: "1.5deg" }]
	},
	radioButton: {
		flexDirection: "column",
		alignItems: "center",
	}
});

export default OpinionRadioInput;