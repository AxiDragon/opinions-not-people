interface ImageMapping {
	[key: string]: any;
}

const images: ImageMapping = {
	'pno': require('@/assets/users/icons/pno.svg'),
	'captain': require('@/assets/users/icons/default.svg'),
	'marco': require('@/assets/users/icons/marco.svg'),
	'jasmin': require('@/assets/users/icons/jasmin.svg'),
	'grant': require('@/assets/users/icons/grant.svg'),
	'undefined': require('@/assets/users/icons/undefined.svg'),
	'player': require('@/assets/users/icons/pno.svg'), //for debugging
};


export default function getImage(name: string): any {
	if (images[name] === undefined) {
		return images['undefined'];
	}

	return images[name];
}

export const playerIcons = [
	images['pno'],
	images['captain'],
	images['marco'],
	images['jasmin'],
	images['grant']];