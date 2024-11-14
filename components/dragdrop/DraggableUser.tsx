import getImage from "@/assets/data/imageMapping";
import User from "@/models/User";
import { setScreen } from "@/utility/EventDispatcher";
import { useRef, useState } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export type Props = {
	user: User;
	onEndDrag?: (user: User, draggable: React.RefObject<View>, x: number, y: number) => void;
}

export default function DraggableUser({ user, onEndDrag }: Props) {
	const [zIndex, setZIndex] = useState(3);
	const [identified, setIdentified] = useState<boolean>(user.identified);
	const translateX = useSharedValue(user.translateX);
	const translateY = useSharedValue(user.translateY);
	const imageSize = 80;
	const draggableRef = useRef<View>(null);

	const tap = Gesture.Tap()
		.numberOfTaps(1)
		.onStart(() => {
			if (!identified) {
				user.identified = true;
				setIdentified(user.identified);
				window.dispatchEvent(new CustomEvent("addInterrogatee", { detail: { user } }));
				setScreen(2);
			} else {
				window.dispatchEvent(new CustomEvent("tappedInterrogatee", { detail: { user } }));
				setScreen(4);
			}
		});

	//TODO: Add some edge detection to prevent the image from going off-screen
	const drag = Gesture.Pan().onChange(event => {
		if (identified) {
			translateX.value += event.changeX;
			translateY.value += event.changeY;
			user.translateX = translateX.value;
			user.translateY = translateY.value;
		}
	})
		.onStart(() => {
			setZIndex(5);
		})
		.onEnd(() => {
			setZIndex(3);
			onEndDrag && onEndDrag(user,
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
						source={identified ? user.image : getImage("undefined")}
						style={{ width: imageSize, height: imageSize }}
					/>
				</GestureDetector>
			</Animated.View>
		</GestureDetector>
	)
}