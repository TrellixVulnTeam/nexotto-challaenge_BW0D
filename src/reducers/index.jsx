import { combineReducers } from "redux";
import LoginData from "./LoginData";
import ReceivedData from "./ReceivedData";

const rootReducer = combineReducers({ LoginData, ReceivedData });

export default rootReducer;