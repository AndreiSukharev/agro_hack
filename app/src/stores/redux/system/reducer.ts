import {LOGIN, GET_LOGGED_USER, LOGOUT, ISystemState, SystemActionTypes} from "./types";

const initialState: ISystemState = {
    loggedUserId: "",
    isLogged: false,
}

const systemReducer = (state = initialState, action: SystemActionTypes) : ISystemState | undefined => {
    switch (action.type) {
        case LOGIN:
            return ({...state, ...action.payload})
        case GET_LOGGED_USER:
            return;
        case LOGOUT:
            return ({loggedUserId: "", isLogged: false})
        default:
            return state;
    }
}

export default systemReducer;
