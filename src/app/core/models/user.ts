export class User {
	id: string;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
}

export interface UserData {
	_id: string;
	first_name: string;
	last_name: string;
	username: string;
	active: boolean;
	role: string;
	courses: Array<string>;
}

export class PostAuthResponse {
	auth: boolean;
	accessToken: string;
	user: UserData;
}
