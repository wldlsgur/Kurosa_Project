import { combineReducers } from "redux";
import mainLogoRedux from "./reducers/mainStateReducer";
import talkStateReducer from "./reducers/talkStateReducer";
import dotRedux from "./reducers/dotStateReducer";
const rootReducer = combineReducers({
  mainLogoRedux,
  talkStateReducer,
  dotRedux,
});

export default rootReducer;
