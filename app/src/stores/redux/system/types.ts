export const LOGIN = "LOGIN";
export const GET_LOGGED_USER = "GET_LOGGED_USER";
export const LOGOUT = "LOGOUT";

export interface ISystemState {
    loggedUserId?: string,
    isLogged: boolean,
    session?: string,
}

interface LoginAction {
    type: typeof LOGIN
    payload: ISystemState
}

interface GetLoggedUserAction {
    type: typeof GET_LOGGED_USER
}

interface LogoutAction {
    type: typeof LOGOUT
}



export type SystemActionTypes = LoginAction | GetLoggedUserAction | LogoutAction;

