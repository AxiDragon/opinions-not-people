interface ImageMapping {
	[key: string]: any;
}

const images: ImageMapping = {
	'pno': require('@/assets/users/pno.png'),
	'default': require('@/assets/users/default.png'),
	'marco': require('@/assets/users/marco.png'),
	'jasmin': require('@/assets/users/jasmin.png'),
	'grant': require('@/assets/users/grant.png'),
};

export default images;