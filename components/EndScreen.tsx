import { users } from "@/assets/users/users";
import { View, Text, StyleSheet } from "react-native"
import UserUI from "./chat/UserUI";
import { COLORS } from "@/constants/colors";

const EndScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>The end!</Text>
			<View style={styles.personContainer}>
				<View>
					<Text style={styles.text}>The people you had wrong</Text>
					{users.map((user, i) =>
						user.opinion != user.playerOpinion && <UserUI key={i} user={user} />
					)}
				</View>
				<View>
					<Text style={styles.text}>The people you had right</Text>
					{users.map((user, i) =>
						user.opinion == user.playerOpinion && <UserUI key={i} user={user} />
					)}
				</View>
			</View>
		</View>
	);
}

export default EndScreen;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	personContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
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