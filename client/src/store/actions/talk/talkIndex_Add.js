const TalkIndex_Add = "TalkIndex_Add";
const TalkContent_Push = "TalkContent_Push";
const TalkContent_Init = "TalkContent_Init";
const FirstTalk_Push = "FirstTalk_Push";

const talkIndexAdd = (data) => {
  return {
    type: TalkIndex_Add,
    payload: data,
  };
};
const firstTalkPush = (data) => {
  return {
    type: FirstTalk_Push,
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

export { talkIndexAdd, firstTalkPush, ContentPush, ContenInit };
