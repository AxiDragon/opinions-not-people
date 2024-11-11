import { StyleSheet, Text, View } from "react-native";
import DraggableUser from "./DraggableUser";
import React, { useRef, useState } from "react";
import { COLORS } from "@/constants/colors";
import User, { Opinion } from "@/models/User";
import { users } from "@/assets/users/users";

const DragSort = () => {
	const [boxes, setBoxes] = useState([
		{ x: 0, y: 0, w: 0, h: 0, opinion: Opinion.POSITIVE },
		{ x: 0, y: 0, w: 0, h: 0, opinion: Opinion.NEGATIVE },
	]);
	const agreeBoxRef = useRef<View>(null);
	const disagreeBoxRef = useRef<View>(null);

	const measureBox = (ref: React.RefObject<View>, i: number) => {
		ref.current?.measure((x, y, w, h, pX, pY) => {
			setBoxes(prevBoxes => {
				const newBoxes = [...prevBoxes];
				newBoxes[i] = { x: pX, y: pY, w, h, opinion: newBoxes[i].opinion };
				return newBoxes;
			});
		});
	}

	const handleEndDrag = (user: User, draggable: React.RefObject<View>, translateX: number, translateY: number) => {
		draggable.current?.measure((x, y, w, h, pX, pY) => {
			x = pX + translateX;
			y = pY + translateY;
			let foundBox: boolean = false;

			boxes.forEach((box, i) => {
				if (box) {
					const inBox =
						x >= box.x &&
						x <= box.x + box.w &&
						y >= box.y &&
						y <= box.y + box.h

					if (inBox) {
						user.playerOpinion = box.opinion;
						foundBox = true;
					}
				}
			});

			if (!foundBox) {
				// no box found
				user.playerOpinion = Opinion.NONE;
			}
		});
	}

	return (
		<View style={styles.container}>
			{/* Let's just not rely on supplying children, we can do it manually */}
			{/* {children} */}
			{/* Just to manipulate flexbox */}
			<View />
			<View style={styles.draggableContainer}>
				<DraggableUser user={users.DEFAULT} onEndDrag={handleEndDrag} />
				<DraggableUser user={users.PNO} onEndDrag={handleEndDrag} />
				<DraggableUser user={users.JASMIN} onEndDrag={handleEndDrag} />
				<DraggableUser user={users.GRANT} onEndDrag={handleEndDrag} />
				<DraggableUser user={users.MARCO} onEndDrag={handleEndDrag} />
			</View>
			{/* TODO: Add a 'Player' user class that determines whether each box 
			is the correct assignment for each user */}
			<View style={styles.boxContainer}>
				<View
					ref={agreeBoxRef}
					style={styles.box}
					onLayout={() => measureBox(agreeBoxRef, 0)}>
					<Text style={styles.boxHeader}>
						AGREE
					</Text>
				</View>
				<View
					ref={disagreeBoxRef}
					style={styles.box}
					onLayout={() => measureBox(disagreeBoxRef, 1)}>
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
		borderColor: COLORS.interactables,
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