import getImage from "@/assets/data/imageMapping";
import { useRef, useState } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export type Props = {
	imageSource: string;
	onEndDrag?: (name: string, draggable: React.RefObject<View>, x: number, y: number) => void;
}

export default function Draggable({ imageSource, onEndDrag }: Props) {
	const [zIndex, setZIndex] = useState(1);
	const [image, setImage] = useState('undefined');
	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);
	const imageSize = 128;
	const draggableRef = useRef<View>(null);

	const tap = Gesture.Tap()
		.numberOfTaps(1)
		.onStart(() => {
			if (image === 'undefined') {
				console.log('tapped');
				setImage(imageSource);
			}
		});

	//TODO: Add some edge detection to prevent the image from going off-screen
	//TODO: Make the image overlay the others when dragged
	const drag = Gesture.Pan().onChange(event => {
		if (image !== 'undefined') {
			translateX.value += event.changeX;
			translateY.value += event.changeY;
		}
	})
		.onStart(() => {
			setZIndex(2);
		})
		.onEnd(() => {
			setZIndex(1);
			onEndDrag && onEndDrag(imageSource,
				draggableRef,
				translateX.value + imageSize / 2,
				translateY.value + imageSize / 2);
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
			zIndex: zIndex,
		};
	});
	return (
		<GestureDetector gesture={drag}>
			<Animated.View style={[containerStyle]} ref={draggableRef}>
				<GestureDetector gesture={tap}>
					<Animated.Image
						source={getImage(image)}
						style={{ width: imageSize, height: imageSize }}
					/>
				</GestureDetector>
			</Animated.View>
		</GestureDetector>
	)
}