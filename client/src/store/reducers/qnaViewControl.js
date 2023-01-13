const initState = { isShare: true };

export default function qnaViewControl(state = initState, action) {

  switch (action.type) {
    case "Change_View":
    return{
      ...state, 
      isShare: !state.isShare,
    }
    case "Init_View":
    return{
      ...state,
      isShare: true,
    }
    default:
    return state;
  }
}
