import { combineReducers } from "redux";
import mainLogoRedux from "./reducers/mainStateReducer";
import talkStateReducer from "./reducers/talkStateReducer";
import dotRedux from "./reducers/dotStateReducer";
import shareController from "./reducers/share";
const rootReducer = combineReducers({
  mainLogoRedux,
  talkStateReducer,
  dotRedux,
  shareController,
});

export default rootReducer;
