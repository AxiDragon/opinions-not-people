import { PLAYER, users } from "@/assets/users/users";
import { Image } from "expo-image";
import { View, Text, StyleSheet } from "react-native";
import UserUI from "./chat/UserUI";
import { COLORS } from "@/constants/colors";
import { useState } from "react";
import Tappable from "./input/Tappable";
import User from "@/models/User";

const EndScreen = () => {
	const [currentUser, setCurrentUser] = useState(0);
	const [revealPhase, setRevealPhase] = useState(0);
	const [isRevealing, setIsRevealing] = useState(true);

	function getPlayerOpinionText() {
		return (PLAYER.opinion == users[currentUser].playerOpinion ? "agreed" : "disagreed") + " with you";
	}

	function getUserOpinionText() {
		return (PLAYER.opinion == users[currentUser].opinion ? "AGREED" : "DISAGREED") + " with you";
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
		} else if (currentUser != users.length - 1) {
			setCurrentUser(currentUser + 1);
			setRevealPhase(0);
		} else {
			//all users revealed
			setIsRevealing(false);
		}
	}

	//TODO: Overall gesture detector? No need for Tappable
	return (
		<View style={styles.container}>
			{
				isRevealing ?
					<>
						<View style={[styles.revealContainer,
						{ backgroundColor: revealPhase === 0 ? COLORS.backgroundDark : '' }]}>
							<View style={styles.revealUserContainer}>
								{revealPhase !== 0 && <Image source={require("@/assets/vectors/beam.svg")} style={styles.beamStyle} />}
								<UserUI user={users[currentUser]} darkened={revealPhase === 0 ? true : false} displayName={false} />
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
													{users[currentUser].getName()}
												</Text>
												<Text style={styles.text}>
													{revealPhase == 2 ?
														getPlayerOpinionText() :
														getUserOpinionText()}
												</Text>
											</> :
											<Text style={styles.text}>{getResultText(users[currentUser])}</Text>
								}
							</View>
						</View>
						<Tappable onTap={handleTap} />
					</>
					:
					// TODO: end chat instead, reflecting on the results
					<View style={styles.reviewContainer}>
						<Text style={[styles.header, { marginBottom: 25 }]}>Results</Text>
						<View style={styles.peopleContainer}>
							{users.map((user, i) =>
								<View style={styles.personContainer} key={i}>
									<UserUI user={user} />
									<Text style={styles.text}>{getResultText(user)}</Text>
								</View>
							)}
						</View>
					</View>
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