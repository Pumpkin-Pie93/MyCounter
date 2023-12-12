import {combineReducers, legacy_createStore as createStore} from "redux";
import {countReducer} from "../reducers/CountReducer";


export const Rootredusers = combineReducers({
    count:countReducer
})


export const store = createStore(Rootredusers)
export type RootState = ReturnType<typeof store.getState>