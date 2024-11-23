import { Animated, Easing, Pressable } from "react-native";
import { Image } from "expo-image";
import { useEffect, useRef } from "react";

type Props = {
	icon: any;
	onPress: (icon: any) => void;
	imageSize: number;
	selected: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function SelectableIcon({ icon, onPress, imageSize, selected }: Props) {
	const scale = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		Animated.timing(scale, {
			toValue: selected ? 1 * 1.3 : 1,
			duration: 250,
			useNativeDriver: false,
			easing: Easing.inOut(Easing.cubic),
		}).start();
	}, [selected]);

	return (
		<AnimatedPressable onPress={() => onPress(icon)}
			style={{ transform: [{ scale }] }}>
			<Image source={icon} style={{ width: imageSize, height: imageSize }} />
		</AnimatedPressable>
	);
}

export default SelectableIcon;