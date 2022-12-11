import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// Component
import WrapDiv from "../components/common/Wrapper.js";
import Content from "../components/talk/content.js";
import Logo from "../components/talk/logo.js";
import FooterDiv from "../components/common/TalkFooter.js";
// redux
import talkIndexAdd from "../store/actions/talk/talkIndex_Add";
// data
import talkData from "../utils/TalkData.js";

const TalkWrap = styled(WrapDiv)`
  display: flex;
  flex-direction: column;
`;

const Talk = () => {
  const talkStateReducer = useSelector((state) => state.talkStateReducer);
  const dispatch = useDispatch();
  let index = talkStateReducer.index;

  const addTalkIndex = (data) => {
    dispatch(talkIndexAdd());
  };
  if (index > 1) {
    return (
      <TalkWrap url={"/assets/Images/talkBackground.gif"}>
        <Logo url={talkData[index].logoImg} index={index}></Logo>
        <Content
          index={index}
          addTalkIndex={addTalkIndex}
          contentImg={talkData[index].contentImg}
          title={talkData[index].title}
          content={talkData[index].content}
        ></Content>
        <FooterDiv></FooterDiv>
      </TalkWrap>
    );
  }

  return (
    <TalkWrap url={"/assets/Images/talkBackground.gif"}>
      <Logo url={talkData[index].logoImg}></Logo>
      <Content
        index={index}
        addTalkIndex={addTalkIndex}
        contentImg={talkData[index].contentImg}
        title={talkData[index].title}
        content={talkData[index].content}
      ></Content>
    </TalkWrap>
  );
};

export default Talk;
