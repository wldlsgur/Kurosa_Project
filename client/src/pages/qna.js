import { useState } from 'react';
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Wrapper from "../components/common/Wrapper";
import QnaImg from "../components/qna/QnaImg";
import Question from "../components/qna/Question";
import Answer from "../components/qna/Answer";
import { useSelector } from "react-redux";
function Qna() {
    const { t, i18n } = useTranslation();
    const talk = t("qna", { returnObjects: true });

    const viewcontrol = useSelector((state) => state.qnaViewControl.isShare);
    const qnaState = useSelector((state) => state.qnaIndexReducer);
    const index = qnaState.index;

    return (
        <QnaWrap url={"/assets/Images/talkBackground.gif"}>      
            {viewcontrol? 
                <>
                  <QnaImg url={talk[index].imgsrc}></QnaImg>
                  <Question></Question>
                </>
                :
                <>
                  <Answer></Answer>
                </>
            }
        </QnaWrap>
    );
}
const QnaWrap = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;


export default Qna;


