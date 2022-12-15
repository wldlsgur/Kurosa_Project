const initState = { index: 0, content: [] };

export default function talkStateReducer(state = initState, action) {
  let copy = { ...state };
  switch (action.type) {
    case "TalkIndex_Add":
      copy.index++;
      break;
    case "TalkContent_Push":
      copy.content.push(action.payload);
      break;
    case "TalkContent_Init":
      copy.content.splice(0);
      break;
    default:
      break;
  }
  return copy;
}
