import { PLAYER, USERS } from "@/assets/users/users";
import { Image } from "expo-image";
import { View, Text, StyleSheet } from "react-native";
import UserUI from "./chat/UserUI";
import { COLORS } from "@/constants/colors";
import { useState } from "react";
import Tappable from "./input/Tappable";
import User from "@/models/User";
import { setScreen } from "@/utility/EventDispatcher";

const EndScreen = () => {
	const [currentUser, setCurrentUser] = useState(0);
	const [revealPhase, setRevealPhase] = useState(0);

	function getPlayerOpinionText() {
		return (PLAYER.opinion == USERS[currentUser].playerOpinion ? "agreed" : "disagreed") + " with you";
	}

	function getUserOpinionText() {
		return (PLAYER.opinion == USERS[currentUser].opinion ? "AGREED" : "DISAGREED") + " with you";
	}

	function getResultText(user: User) {
		let result = "You ";

		if (user.opinion == user.playerOpinion) {
			result += "correctly ";
		} else {
			result += "incorrectly ";
		}

		if (user.playerOpinion == PLAYER.opinion) {
			result += "let " + user.getName() + " go";
		} else {
			result += "imprisoned " + user.getName();
		}

		return result;
	}

	function handleTap() {
		if (revealPhase < 4) {
			setRevealPhase(revealPhase + 1);
		} else if (currentUser != USERS.length - 1) {
			setCurrentUser(currentUser + 1);
			setRevealPhase(0);
		} else {
			//all users revealed, go to ending
			setScreen(5);
		}
	}

	//TODO: Overall gesture detector? No need for Tappable
	return (
		<View style={styles.container}>
			{
				<>
					<View style={[styles.revealContainer,
					{ backgroundColor: revealPhase === 0 ? COLORS.backgroundDark : '' }]}>
						<View style={styles.revealUserContainer}>
							{revealPhase !== 0 && <Image source={require("@/assets/vectors/beam.svg")} style={styles.beamStyle} />}
							<UserUI user={USERS[currentUser]} darkened={revealPhase === 0 ? true : false} displayName={false} />
						</View>
						<View style={styles.revealTextContainer}>
							{
								revealPhase < 2 ?
									<>
									</>
									:
									revealPhase < 4 ?
										<>
											<Text style={styles.text}>
												{revealPhase == 2 ?
													"You thought that" :
													"In reality,"}
											</Text>
											<Text style={styles.header}>
												{USERS[currentUser].getName()}
											</Text>
											<Text style={styles.text}>
												{revealPhase == 2 ?
													getPlayerOpinionText() :
													getUserOpinionText()}
											</Text>
										</> :
										<Text style={styles.text}>{getResultText(USERS[currentUser])}</Text>
							}
						</View>
					</View>
					<Tappable onTap={handleTap} />
				</>
			}
		</View>
	);
}

export default EndScreen;

const styles = StyleSheet.create({
	beamStyle: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	revealContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	revealUserContainer: {
		width: '100%',
		height: '60%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	revealTextContainer: {
		width: '100%',
		height: '40%',
		display: 'flex',
		padding: 25,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: COLORS.backgroundDark,
	},
	reviewContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	personContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	peopleContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: 25,
	},
	text: {
		color: COLORS.text,
		fontSize: 15,
		fontWeight: 'bold',
	},
	header: {
		color: COLORS.text,
		fontSize: 30,
		fontWeight: 'bold',
	},
});