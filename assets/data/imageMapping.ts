interface ImageMapping {
	[key: string]: any;
}

const images: ImageMapping = {
	'pno': require('@/assets/users/icons/pno.svg'),
	'captain': require('@/assets/users/icons/default.svg'),
	'marco': require('@/assets/users/icons/marco.svg'),
	'jasmin': require('@/assets/users/icons/jasmin.svg'),
	'grant': require('@/assets/users/icons/grant.svg'),
	'hanna': require('@/assets/users/icons/hanna.svg'),
	'isabel': require('@/assets/users/icons/isabel.svg'),
	'julian': require('@/assets/users/icons/julian.svg'),
	'kate': require('@/assets/users/icons/kate.svg'),
	'adrian': require('@/assets/users/icons/adrian.svg'),
	'undefined': require('@/assets/users/icons/undefined.svg'),
};


export default function getImage(name: string): any {
	if (images[name] === undefined) {
		return images['undefined'];
	}

	return images[name];
}

export const playerIcons = [
	images['pno'],
	images['isabel'],
	images['julian'],
	images['adrian'],
];