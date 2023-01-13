const initState = { show: "" };

export default function mainLogoRedux(state = initState, action) {
  let copy = { ...state };
  switch (action.type) {
    case "MainLogo_Update":
      copy.show = action.payload;
      break;

    default:
      break;
  }
  return copy;
}
