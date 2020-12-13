import systemReducer from "./system/reducer";
import {createStore, combineReducers} from "redux"


const rootReducer = combineReducers({
    system: systemReducer,
})

export const configureStore = () => createStore(rootReducer);
export type RootStateType = ReturnType<typeof rootReducer>
