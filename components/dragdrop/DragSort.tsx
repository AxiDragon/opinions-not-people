import { Pressable, StyleSheet, Text, View } from "react-native";
import DraggableUser from "./DraggableUser";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "@/constants/colors";
import User, { Opinion } from "@/models/User";
import { PLAYER, users } from "@/assets/users/users";
import { setScreen } from "@/utility/EventDispatcher";

const DragSort = () => {
	const [boxes, setBoxes] = useState([
		{
			x: 0, y: 0, w: 0, h: 0,
			opinion: PLAYER.opinion === Opinion.POSITIVE ? Opinion.POSITIVE : Opinion.NEGATIVE
		},
		{
			x: 0, y: 0, w: 0, h: 0,
			opinion: PLAYER.opinion === Opinion.POSITIVE ? Opinion.NEGATIVE : Opinion.POSITIVE
		},
	]);
	const agreeBoxRef = useRef<View>(null);
	const disagreeBoxRef = useRef<View>(null);
	const [allUsersAllocated, setAllUsersAllocated] = useState(false);

	const draggableUsers = [
		users.DEFAULT,
		users.PNO,
		users.JASMIN,
		users.GRANT,
		users.MARCO
	];

	const checkAllUsersAllocated = (): boolean => {
		return draggableUsers.every(user => user.playerOpinion !== Opinion.NONE);
	}

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

			console.log(checkAllUsersAllocated());
			setAllUsersAllocated(checkAllUsersAllocated());
		});
	}

	const handleEndButtonPressed = () => {
		console.log("That's right, all users have been allocated!");
		setScreen(3);
	};

	useEffect(() => {
		if (checkAllUsersAllocated()) {
			setAllUsersAllocated(true);
		}
	}, []);

	//TODO: Restyle this to have a top and bottom instead, with characters in the middle?
	//it'd fit better with phone screens
	return (
		<View style={styles.container}>
			{/* Let's just not rely on supplying children, we can do it manually */}
			{/* {children} */}
			{/* Just to manipulate flexbox */}
			{allUsersAllocated &&
				<View style={styles.allAllocatedContainer}>
					<Pressable style={styles.allAllocatedButton} onPress={handleEndButtonPressed}>
						<Text>
							Everyone has been allocated!
						</Text>
					</Pressable>
				</View>}
			<View />
			<View style={styles.draggableContainer}>
				{draggableUsers.map((user, i) => (
					<DraggableUser
						key={i}
						user={user}
						onEndDrag={handleEndDrag} />
				))}
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
	},
	allAllocatedContainer: {
		position: 'absolute',
		width: '100%',
		height: 500,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2,
	},
	allAllocatedButton: {
		padding: 25,
		backgroundColor: COLORS.interactables,
	}
});

export default DragSort;