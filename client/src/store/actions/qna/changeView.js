const Change_View = "Change_View";

const changeView = (data) => {
  return {
    type: Change_View,
    payload: data,
  };
};

export default changeView;
