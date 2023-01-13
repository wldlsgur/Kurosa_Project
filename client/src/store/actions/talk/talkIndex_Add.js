const TalkIndex_Add = "TalkIndex_Add";
const TalkIndex_Init = "TalkIndex_Init";
const TalkContent_Push = "TalkContent_Push";
const TalkContent_Init = "TalkContent_Init";

const talkIndexAdd = (data) => {
  return {
    type: TalkIndex_Add,
    payload: data,
  };
};
const talkIndexInit = (data) => {
  return {
    type: TalkIndex_Init,
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

export { talkIndexAdd, talkIndexInit, ContentPush, ContenInit };
