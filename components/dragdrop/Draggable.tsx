import { ImageSourcePropType } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { SharedValue, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

type Props = {
	imageSource: ImageSourcePropType | SharedValue<ImageSourcePropType | undefined> | undefined;
}

export default function Draggable({ imageSource }: Props) {
	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);
	const imageSize = 200;

	const doubleTap = Gesture.Tap()
		.numberOfTaps(1)
		.onStart(() => {
			console.log('tapped');
		});

	const drag = Gesture.Pan().onChange(event => {
		translateX.value += event.changeX;
		translateY.value += event.changeY;
	});

	const containerStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateX.value
				},
				{
					translateY: translateY.value
				}
			],
		};
	});

	return (
		<GestureDetector gesture={drag}>
			<Animated.View style={[containerStyle, { top: -350 }]}>
				<GestureDetector gesture={doubleTap}>
					<Animated.Image
						source={imageSource}
						resizeMode="contain"
						style={{ width: imageSize, height: imageSize }}
					/>
				</GestureDetector>
			</Animated.View>
		</GestureDetector>
	)
}