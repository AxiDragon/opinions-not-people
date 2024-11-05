import { COLORS } from "@/constants/colors";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {
	leftLabel?: string,
	middleLabel?: string,
	rightLabel?: string,
	initialValue?: number,
	onValueChange: (value: number) => void
}

export default function LabeledSlider({
	leftLabel = "Disagree",
	middleLabel,
	rightLabel = "Agree",
	initialValue = 0.5,
	onValueChange }: Props) {

	const [value, setValue] = useState<number>(initialValue);

	const handleValueChange = (value: number) => {
		setValue(value);
		onValueChange(value);
	}

	return (
		<View style={styles.container}>
			<Slider
				style={{ width: "90%", height: 40 }}
				value={value}
				minimumTrackTintColor={COLORS.messageBorder}
				maximumTrackTintColor={COLORS.background}
				thumbTintColor={COLORS.messageBorder}
				onValueChange={handleValueChange}
			/>
			<View style={{ width: "90%", flexDirection: "row", justifyContent: "space-between" }}>
				<Text style={[styles.text, { textAlign: "left" }]}>{leftLabel}</Text>
				{middleLabel && <Text style={styles.text}>{middleLabel}</Text>}
				<Text style={[styles.text, { textAlign: "right" }]}>{rightLabel}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
	},
	text: {
		color: COLORS.text,
		fontSize: 12,
		textAlign: "center",
		flex: 1,
	},
});