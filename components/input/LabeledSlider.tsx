import { COLORS } from "@/constants/colors";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

type Props = {
	leftLabel?: string,
	middleLabel?: string,
	rightLabel?: string,
	initialValue?: number,
	onValueChange: (value: number) => void
}

//As far as I know this component is only going to be used once, 
//so I'm not sure if it's worth it to make it a controlled component
export default function LabeledSlider({
	leftLabel = "Disagree",
	middleLabel,
	rightLabel = "Agree",
	initialValue = 0.5,
	onValueChange }: Props) {
	const [value, setValue] = useState<number>(initialValue);
	//TODO: Paper texture thing
	const handleValueChange = (value: number) => {
		setValue(value);
		onValueChange(value);
	}

	return (
		<ImageBackground source={require("@/assets/images/paper.png")} style={styles.background}>
			<View style={styles.container}>
				<Text style={styles.header}>Same-sex marriage should be legal.</Text>
				<Slider
					style={{ width: "90%", height: 40 }}
					value={value}
					minimumTrackTintColor={COLORS.backgroundDark}
					maximumTrackTintColor={COLORS.background}
					thumbTintColor={COLORS.backgroundDark}
					onValueChange={handleValueChange}
				/>
				<View style={{ width: "90%", flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={[styles.text, { textAlign: "left" }]}>{leftLabel}</Text>
					{middleLabel && <Text style={styles.text}>{middleLabel}</Text>}
					<Text style={[styles.text, { textAlign: "right" }]}>{rightLabel}</Text>
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
	}
});