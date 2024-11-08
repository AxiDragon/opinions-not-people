import images from "@/assets/data/imageMapping";
import { forwardRef, useImperativeHandle } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

type Props = {
	imageSource: string;
	onEndDrag?: (x: number, y: number) => void;
}

export default function Draggable({ imageSource, onEndDrag }: Props) {
	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);
	const imageSize = 128;

	const tap = Gesture.Tap()
		.numberOfTaps(1)
		.onStart(() => {
			console.log('tapped');
		});

	//TODO: Add some edge detection to prevent the image from going off-screen
	//TODO: Make the image overlay the others when dragged
	const drag = Gesture.Pan().onChange(event => {
		translateX.value += event.changeX;
		translateY.value += event.changeY;
	})
		.onEnd(() => {
			onEndDrag && onEndDrag(translateX.value, translateY.value);
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
			position: 'absolute',
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