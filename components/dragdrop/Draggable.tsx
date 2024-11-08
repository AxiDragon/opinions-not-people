import images from "@/assets/data/imageMapping";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

type Props = {
	imageSource: string;
}

export default function Draggable({ imageSource }: Props) {
	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);
	const imageSize = 128;

	const tap = Gesture.Tap()
		.numberOfTaps(1)
		.onStart(() => {
			console.log('tapped');
		});

	//TODO: Add some edge detection to prevent the image from going off-screen
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
			<Animated.View style={[containerStyle]}>
				<GestureDetector gesture={tap}>
					<Animated.Image
						source={images[imageSource]}
						style={{ width: imageSize, height: imageSize }}
					/>
				</GestureDetector>
			</Animated.View>
		</GestureDetector>
	)
}