import {GET_LOGGED_USER, ISystemState, LOGIN, LOGOUT, SystemActionTypes} from './types'

export function loginUser(loggedUser: ISystemState): SystemActionTypes {
    return {
        type: LOGIN,
        payload: loggedUser
    }
}

export function getLoggedUser(): SystemActionTypes {
    return {
        type: GET_LOGGED_USER,
    }
}

export function logoutUser(): SystemActionTypes {
    return {
        type: LOGOUT,
    }
}
