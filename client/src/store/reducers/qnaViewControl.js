const initState = { isShare: true };

export default function qnaViewControl(state = initState, action) {

  switch (action.type) {
    case "Change_View":
    return{
        ...state, 
        isShare: !state.isShare,
    }
    default:
    return state;
  }
}
