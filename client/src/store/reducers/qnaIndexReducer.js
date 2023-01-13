const initState = { index: 0, path: 0, tidx: 0 };

export default function qnaIndexReducer(state = initState, action) {
    let copy = { ...state };
  switch (action.type) {
   
    case "Path_Set":
        copy.path = action.payload;
        break;
    case "Tidx_Add":
        copy.tidx++;
        break;
    case "Qna_Init":
        copy.index++;
        copy.path = 0;
        copy.tidx = 0;
        break;
    default:
        break;
  }
  return copy;
}
