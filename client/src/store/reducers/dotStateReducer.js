const initState = { state: "none" };

export default function dotRedux(state = initState, action) {
  let copy = { ...state };
  switch (action.type) {
    case "DotState_Toggle":
      copy.state = action.payload;
      break;

    default:
      break;
  }
  return copy;
}
