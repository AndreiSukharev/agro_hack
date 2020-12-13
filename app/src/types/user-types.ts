export interface IUserLogin {
    login: string,
    password: string,
}

export interface IUser {
    _id: string,
    login: string,
    name: string,
    avatar: string,
}

export interface IFriends {
    friends: IUser[]
}
