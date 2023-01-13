const Change_View = "Change_View";
const Init_View = "Init_View";

const changeView = (data) => {
  return {
    type: Change_View,
    payload: data,
  };
};
const initView = (data) => {
  return {
    type: Init_View,
    payload: data,
  };
};
export {changeView, initView};
