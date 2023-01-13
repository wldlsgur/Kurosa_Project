import { combineReducers } from "redux";
import mainLogoRedux from "./reducers/mainStateReducer";
import talkStateReducer from "./reducers/talkStateReducer";
import dotRedux from "./reducers/dotStateReducer";
import shareController from "./reducers/share";
import qnaViewControl from "./reducers/qnaViewControl";
import qnaIndexReducer from "./reducers/qnaIndexReducer";
const rootReducer = combineReducers({
  mainLogoRedux,
  talkStateReducer,
  dotRedux,
  shareController,
  qnaViewControl,
  qnaIndexReducer,
});

export default rootReducer;
