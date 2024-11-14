import { COLORS } from "@/constants/colors";
import { View, Text, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type Props = {
	onTap: () => void;
}

const Tappable = ({ onTap }: Props) => {
	const tap = Gesture.Tap().onStart(onTap);

	return (
		<GestureDetector gesture={tap}>
			<View style={styles.tappable}>
				<Text style={styles.tappableText}>Tap here to continue</Text>
			</View>
		</GestureDetector>
	);
}

const styles = StyleSheet.create({
	tappable: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: 150,
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: COLORS.backgroundDark,
	},
	tappableText: {
		color: COLORS.text,
		fontSize: 25,
		textAlign: "center",
	},
});

export default Tappable;