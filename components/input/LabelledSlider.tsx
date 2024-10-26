import { COLORS } from "@/constants/colors";
import Slider from "@react-native-community/slider";
import { StyleSheet, View, Text } from "react-native";

type Props = {
	minimumValue?: number,
	maximumValue?: number,
	leftLabel?: string,
	middleLabel?: string,
	rightLabel?: string,
	onValueChange: (value: number) => void
}

export default function LabelledSlider({
	minimumValue = 1,
	maximumValue = 10,
	leftLabel = "Disagree",
	middleLabel,
	rightLabel = "Agree",
	onValueChange }: Props) {
	return (
		<View style={styles.container}>
			<Slider
				style={{ width: "90%", height: 40 }}
				minimumValue={minimumValue}
				maximumValue={maximumValue}
				value={(minimumValue + maximumValue) / 2}
				minimumTrackTintColor={COLORS.messageBorder}
				maximumTrackTintColor={COLORS.background}
				thumbTintColor={COLORS.messageBorder}
				onValueChange={onValueChange}
			/>
			<View style={{ width: "90%", flexDirection: "row", justifyContent: "space-between" }}>
				<Text style={styles.text}>{leftLabel}</Text>
				{middleLabel && <Text style={styles.text}>{middleLabel}</Text>}
				<Text style={styles.text}>{rightLabel}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: COLORS.text,
		fontSize: 12,
		textAlign: "center",
	}
});