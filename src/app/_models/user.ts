export class User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}

export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  active: boolean;
  role: string;
  courses: Array<string>;
  token: string;
}

export class PostRegisterRequest {
  first_name: string;
  last_name: string;
  login: string;
  password: string;
}

export class PostRegisterResponse {
  token: string;
  user: UserModel;
}

export class PostAuthResponse {
  token: string;
  user: UserModel;
}

export class UserModel {
  active: boolean;
  confirmation_code: string;
  confirmation_code_expires_at: string;
  confirmed: boolean;
  created_at: string;
  deleted_at: string;
  description: string;
  first_name: string;
  groups: Array<number>;
  id: number;
  last_name: string;
  login: string;
  password: string;
  updated_at: string;
  user_sessions: Array<UserSessionModel>;
}

export class UserSessionList {}

export class UserSessionModel {
  active: boolean;
  created_at: string;
  deleted_at: string;
  description: string;
  expires_at: string;
  id: number;
  token: string;
  updated_at: string;
  user: any;
}
