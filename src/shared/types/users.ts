export interface IUsers {
  user_id: number;
  user_name: string;
  user_full_name: string;
  user_avatar: string;
  user_about: string;
}

export interface IUser {
  user: IUsers;
}

export interface IPosts {
  user_id: number;
  user_name: string;
  user_avatar: string;
  user_post: string;
}

export interface IPost {
  post: IPosts;
}
