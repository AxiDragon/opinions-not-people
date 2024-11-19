import getImage from "@/assets/data/imageMapping";
import { allUsers } from "@/assets/users/users";
import User from "@/models/User";
import { setScreen } from "@/utility/EventDispatcher";
import { useRef, useState } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export type Props = {
	user: User;
	id: number;
	size: number;
	initialX: number;
	initialY: number;
	onEndDrag?: (id: number, draggable: React.RefObject<View>, x: number, y: number) => void;
	onFirstTap?: (id: number) => void;
}

export default function DraggableUser({ user, id, size, initialX, initialY, onEndDrag, onFirstTap }: Props) {
	const [zIndex, setZIndex] = useState(3);
	const translateX = useSharedValue(initialX);
	const translateY = useSharedValue(initialY);
	const draggableRef = useRef<View>(null);

	const tap = Gesture.Tap()
		.numberOfTaps(1)
		.onStart(() => {
			if (user === allUsers.UNDEFINED) {
				onFirstTap && onFirstTap(id);
			} else {
				window.dispatchEvent(new CustomEvent("tappedInterrogatee", { detail: { user } }));
				setScreen(4);
			}
		});

	//TODO: Add some edge detection to prevent the image from going off-screen
	const drag = Gesture.Pan().onChange(event => {
		if (user !== allUsers.UNDEFINED) {
			translateX.value += event.changeX;
			translateY.value += event.changeY;
		}
	})
		.onStart(() => {
			setZIndex(5);
		})
		.onEnd(() => {
			setZIndex(3);
			onEndDrag && onEndDrag(id,
				draggableRef,
				translateX.value,
				translateY.value);
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
						source={user.image}
						style={{ width: size, height: size }}
					/>
				</GestureDetector>
			</Animated.View>
		</GestureDetector>
	)
}