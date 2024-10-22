import images from "@/app/assets/imageMapping";

export default class User {
	public image;

	constructor(
		public name: string = "John",
		public color: string = "#dddddd"
	) {
		this.image = images[name.toLowerCase()];
	}
}

export const PNO: User = new User("PNO");
export const GRANT: User = new User("Grant");