import { LayoutRectangle, StyleSheet, View } from "react-native";
import Draggable from "./Draggable";
import React, { useRef, useState } from "react";
import { Layout } from "react-native-reanimated";

type Props = {
	children?: React.ReactNode;
}

const DragSort: React.FC<Props> = ({ children }) => {
	const [boxes, setBoxes] = useState<LayoutRectangle[]>([
		{ x: 0, y: 0, w: 0, h: 0 },
		{ x: 0, y: 0, w: 0, h: 0 },
	]);
	const box1Ref = useRef<View>(null);
	const box2Ref = useRef<View>(null);

	const measureBox = (ref: React.RefObject<View>, i: number) => {
		ref.current?.measure((x, y, w, h, pX, pY) => {
			setBoxes(prevBoxes => {
				const newBoxes = [...prevBoxes];
				newBoxes[i] = { x: pX, y: pY, w, h };
				return newBoxes;
			});
		});
	}

	const handleEndDrag = (id: string, draggable: React.RefObject<View>, translateX: number, translateY: number) => {
		draggable.current?.measure((x, y, w, h, pX, pY) => {
			x = pX + translateX;
			y = pY + translateY;

			boxes.forEach((box, i) => {
				if (box) {
					const inBox =
						x >= box.x &&
						x <= box.x + box.w &&
						y >= box.y &&
						y <= box.y + box.h

					if (inBox) {
						console.log(`Placed ${id} in ${i + 1}`);
					}
				}
			});

		});
	}

	return (
		<View style={styles.container}>
			{/* Let's just not rely on supplying children, we can do it manually */}
			{/* {children} */}
			<View
				ref={box1Ref}
				style={styles.box1}
				onLayout={() => measureBox(box1Ref, 0)} />
			<View
				ref={box2Ref}
				style={styles.box2}
				onLayout={() => measureBox(box2Ref, 1)} />
			<Draggable imageSource={"default"} onEndDrag={handleEndDrag} />
			<Draggable imageSource={"pno"} onEndDrag={handleEndDrag} />
			<Draggable imageSource={"jasmin"} onEndDrag={handleEndDrag} />
			<Draggable imageSource={"grant"} onEndDrag={handleEndDrag} />
			<Draggable imageSource={"marco"} onEndDrag={handleEndDrag} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: '100%',
		width: '100%',
	},
	box1: {
		width: 100,
		height: 100,
		backgroundColor: "red",
	},
	box2: {
		width: 100,
		height: 100,
		backgroundColor: "blue",
	}
});

export default DragSort;