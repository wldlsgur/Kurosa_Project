const initState = { isShare: false };

export default function shareController(state = initState, action) {
  let copy = { ...state };
  switch (action.type) {
    case "Share_Toggle":
      copy.isShare = action.payload;
      break;

    default:
      break;
  }
  return copy;
}
