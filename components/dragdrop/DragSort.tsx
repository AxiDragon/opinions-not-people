import { Pressable, StyleSheet, Text, View } from "react-native";
import DraggableUser from "./DraggableUser";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "@/constants/colors";
import { Opinion } from "@/models/User";
import { PLAYER, USERS } from "@/assets/users/users";
import { setScreen } from "@/utility/EventDispatcher";
import draggableUsers, { onNewUserTapped } from "@/assets/data/draggableUsers";

const imageSize = 80;

const DragSort = () => {
	const [boxes, setBoxes] = useState([
		{
			x: 0, y: 0, w: 0, h: 0,
			opinion: PLAYER.opinion
		},
		{
			x: 0, y: 0, w: 0, h: 0,
			opinion: PLAYER.opinion === Opinion.POSITIVE ? Opinion.NEGATIVE : Opinion.POSITIVE
		},
	]);
	const [allUsersAllocated, setAllUsersAllocated] = useState(false);
	const agreeBoxRef = useRef<View>(null);
	const disagreeBoxRef = useRef<View>(null);

	const checkAllUsersAllocated = (): boolean => {
		return USERS.every(user => user.playerOpinion !== Opinion.NONE);
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

	const handleEndDrag = (i: number, draggable: React.RefObject<View>, translateX: number, translateY: number) => {
		draggable.current?.measure((x, y, w, h, pX, pY) => {
			const draggableUser = draggableUsers.find(du => du.i === i);
			if (!draggableUser) {
				console.error("Could not find draggable user with id " + i);
				return;
			}

			draggableUser.translateX = translateX;
			draggableUser.translateY = translateY;

			const user = draggableUser.user;

			x = pX + translateX + imageSize / 2;
			y = pY + translateY + imageSize / 2;
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

			setAllUsersAllocated(checkAllUsersAllocated());
		});
	}

	const handleUserTapped = (i: number) => {
		onNewUserTapped(i);

		window.dispatchEvent(new CustomEvent("addInterrogatee", { detail: { user: draggableUsers[i].user } }));
		setScreen(2);
	};

	const handleEndButtonPressed = () => {
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
			<View style={styles.containerAround}>
				<Text style={styles.explanationText}>
					You think that same-sex marriage should be {PLAYER.opinion === Opinion.POSITIVE ? "legal" : "illegal"}.
					<br />
					<br />
					Click unidentified users (?) to talk to them.
					<br />
					Drag identified users to assign them, whether you think they agree or disagree with you.
					<br />
					Click identified users to read their responses.
				</Text>
				<View style={styles.draggableContainer}>
					{draggableUsers.map((user, i) => (
						<DraggableUser
							key={user.i}
							user={user.user}
							id={user.i}
							size={imageSize}
							initialX={user.translateX}
							initialY={user.translateY}
							onEndDrag={handleEndDrag}
							onFirstTap={handleUserTapped} />
					))}
				</View>
			</View>
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
	containerAround: {
		flex: 1,
		height: '100%',
		width: '100%',
		justifyContent: 'space-around',
		zIndex: 25,
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
		height: 350,
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
	explanationText: {
		textAlign: 'center',
		fontWeight: 700,
		fontSize: 16,
		color: COLORS.text,
	},
	allAllocatedContainer: {
		position: 'absolute',
		width: '100%',
		top: '33%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 500,
	},
	allAllocatedButton: {
		padding: 25,
		zIndex: 500,
		backgroundColor: COLORS.interactables,
	}
});

export default DragSort;