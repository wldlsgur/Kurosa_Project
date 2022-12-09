import { combineReducers } from "redux";
import mainLogoRedux from "./reducers/mainStateReducer";
import talkStateReducer from "./reducers/talkStateReducer";
const rootReducer = combineReducers({ mainLogoRedux, talkStateReducer });

export default rootReducer;
