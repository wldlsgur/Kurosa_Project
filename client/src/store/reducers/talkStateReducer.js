const initState = { index: 0 };

export default function talkStateReducer(state = initState, action) {
  let copy = { ...state };
  switch (action.type) {
    case "TalkIndex_Add":
      copy.index++;
      break;

    default:
      break;
  }
  return copy;
}
