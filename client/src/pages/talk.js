import { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Component
import WrapDiv from "../components/common/Wrapper.js";
import Content from "../components/talk/content.js";
import Logo from "../components/talk/logo.js";
import Footer from "../components/common/footer.js";
// redux
import {
  talkIndexAdd,
  ContentPush,
  ContenInit,
} from "../store/actions/talk/talkIndex_Add";

const Talk = () => {
  const { t, i18n } = useTranslation();
  const talkStateReducer = useSelector((state) => state.talkStateReducer);
  const dispatch = useDispatch();

  const contentIndex = useRef(1); //대화 현재 인덱스
  const { index, content } = talkStateReducer; //전체 현재 인덱스와 대화배열
  const talk = t("talk", { returnObjects: true }); //대화 객체
  const fontStyle = i18n.language === "kr" ? "Ycomputer" : "JFDotKappa200213";

  const addTalkIndex = (e) => {
    let contentData = t(talk[index].content[contentIndex.current]);
    if (!contentData) {
      contentIndex.current = 1;
      dispatch(talkIndexAdd());
      dispatch(ContenInit());
      return;
    }
    dispatch(ContentPush(contentData));
    contentIndex.current++;
  }; //클릭 이벤트

  useEffect(() => {
    const typingInterval = setInterval(() => {});
  }, 300);
  if (t(talk[index].content[0]) && t(talk[index].title)) {
    return (
      <TalkWrap url={"/assets/Images/talkBackground.gif"}>
        <Logo url={t(talk[index].logoImg)} title={t(talk[index].title)}></Logo>
        <Content
          fontStyle={fontStyle}
          lastIndex={contentIndex}
          talkData={talk}
          index={index}
          addTalkIndex={addTalkIndex}
          contentImg={t(talk[index].contentImg)}
          title={t(talk[index].title)}
          content={content}
        ></Content>
        <Footer></Footer>
      </TalkWrap>
    );
  }

  return (
    <TalkWrap url={"/assets/Images/talkBackground.gif"}>
      <Logo url={t(talk[index].logoImg)}></Logo>
      <Content
        fontStyle={fontStyle}
        lastIndex={contentIndex}
        talkData={talk}
        index={index}
        addTalkIndex={addTalkIndex}
        contentImg={t(talk[index].contentImg)}
        title={t(talk[index].title)}
        content={content}
      ></Content>
    </TalkWrap>
  );
};

const TalkWrap = styled(WrapDiv)`
  display: flex;
  flex-direction: column;
`;
export default Talk;
