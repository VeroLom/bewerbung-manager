import {combineReducers} from "redux";
import {bewerbungReducer} from "./bewerbungReducer";

export const rootReducer = combineReducers({
    bewerbungs: bewerbungReducer,
});

export type RootState = ReturnType<typeof rootReducer>;