import { playerIcons } from "@/assets/data/imageMapping";
import { View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { COLORS } from "@/constants/colors";
import { PLAYER } from "@/assets/users/users";
import SelectableIcon from "./SelectableIcon";
import { useState } from "react";

type Props = {
	/*
	 * The component handles saving the selected icon,
	 * this is just to be notified when the user has selected an icon.
	 */
	onSelect?: (icon: string) => void;
}

const IconSelector = ({ onSelect }: Props) => {
	const imageSize = 96;
	const [selectedIcon, setSelectedIcon] = useState<string>("");


	const handleSelectIcon = (icon: any) => {
		PLAYER.image = icon;

		setSelectedIcon(icon);

		if (onSelect) {
			onSelect(icon);
		}
	};

	return (
		<View style={styles.iconSelector}>
			{
				playerIcons.map((icon, index) =>
					<SelectableIcon
						key={index}
						onPress={handleSelectIcon}
						imageSize={imageSize}
						icon={icon}
						selected={icon === selectedIcon} />
				)
			}
		</View>
	);
}

const styles = StyleSheet.create({
	iconSelector: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		gap: 50,
		padding: 25,
		backgroundColor: COLORS.backgroundDark,
		marginTop: 25,
		borderRadius: 25,
	}
});

export default IconSelector;