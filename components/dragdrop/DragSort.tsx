import { LayoutRectangle, StyleSheet, Text, View } from "react-native";
import Draggable from "./Draggable";
import React, { useRef, useState } from "react";
import { COLORS } from "@/constants/colors";

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
			{/* Just to manipulate flexbox */}
			<View />
			<View style={styles.draggableContainer}>
				<Draggable imageSource={"default"} onEndDrag={handleEndDrag} />
				<Draggable imageSource={"pno"} onEndDrag={handleEndDrag} />
				<Draggable imageSource={"jasmin"} onEndDrag={handleEndDrag} />
				<Draggable imageSource={"grant"} onEndDrag={handleEndDrag} />
				<Draggable imageSource={"marco"} onEndDrag={handleEndDrag} />
			</View>
			<View style={styles.boxContainer}>
				<View
					ref={box1Ref}
					style={styles.box}
					onLayout={() => measureBox(box1Ref, 0)}>
					<Text style={styles.boxHeader}>
						AGREE
					</Text>
				</View>
				<View
					ref={box2Ref}
					style={styles.box}
					onLayout={() => measureBox(box2Ref, 1)}>
					<Text style={styles.boxHeader}>
						DISAGREE
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		width: '100%',
		justifyContent: 'space-between',
	},
	boxContainer: {
		flexDirection: 'row',
		width: '100%',
		maxWidth: 500,
		alignItems: 'flex-end',
	},
	draggableContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'center',
		gap: 25,
		flexWrap: 'wrap',
		maxWidth: 500,
		zIndex: 1,
	},
	box: {
		height: 500,
		flex: 1,
		backgroundColor: COLORS.messageBackground,
		borderColor: COLORS.messageBorder,
		borderWidth: 5,
	},
	boxHeader: {
		textAlign: 'center',
		fontWeight: 700,
		fontSize: 20,
		color: COLORS.text,
	}
});

export default DragSort;