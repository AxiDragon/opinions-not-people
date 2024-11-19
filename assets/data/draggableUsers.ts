import { allUsers, users } from "../users/users";


let usersTapped = 0;
//used to save info without it being lost when the component re-renders
const draggableUsers = users.map((user, i) => {
	return {
		user: allUsers.UNDEFINED,
		i,
		translateX: 0,
		translateY: 0
	};
});

export function onNewUserTapped(tappedUserId: number) {
	draggableUsers[tappedUserId].user = users[usersTapped++];
}

export default draggableUsers;