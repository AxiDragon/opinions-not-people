import { ALL_USERS, USERS } from "../users/users";


let usersTapped = 0;
//used to save info without it being lost when the component re-renders
const draggableUsers = USERS.map((user, i) => {
	return {
		user: ALL_USERS.UNDEFINED,
		i,
		translateX: 0,
		translateY: 0
	};
});

export function onNewUserTapped(tappedUserId: number) {
	draggableUsers[tappedUserId].user = USERS[usersTapped++];
}

export default draggableUsers;