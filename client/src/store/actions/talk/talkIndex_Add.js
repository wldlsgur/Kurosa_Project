const TalkIndex_Add = "TalkIndex_Add";
const TalkContent_Push = "TalkContent_Push";
const TalkContent_Init = "TalkContent_Init";

const talkIndexAdd = (data) => {
  return {
    type: TalkIndex_Add,
    payload: data,
  };
};

const ContentPush = (data) => {
  return {
    type: TalkContent_Push,
    payload: data,
  };
};

const ContenInit = (data) => {
  return {
    type: TalkContent_Init,
    payload: data,
  };
};

export { talkIndexAdd, ContentPush, ContenInit };
