import { useState } from 'react';
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Wrapper from "../components/common/Wrapper";
import QnaImg from "../components/qna/QnaImg";
import Question from "../components/qna/Question";
import Answer from "../components/qna/Answer";

function Qna() {
    const { t, i18n } = useTranslation();
    const talk = t("qna", { returnObjects: true });
    
    const [index, setIndex] = useState(0);
    const [path, setPath] = useState(0);
    const [viewcontrol, setViewControl] = useState(true);

    const pathSet = (idx) => {
        setPath(idx);
        controlView();
    }

    const indexAdd = () =>{
        setIndex(index+1);
    }

    const controlView = () =>{
        setViewControl(!viewcontrol)
    }
    return (
        <QnaWrap url={"/assets/Images/talkBackground.gif"}>      
            {viewcontrol? 
                <>
                  <QnaImg url={talk[index].imgsrc}></QnaImg>
                  <Question item={talk[index]} pathSet={pathSet} index={index}></Question>
                </>
                :
                <>
                  <Answer index={index} item={talk[index].talk} path={path} indexAdd={indexAdd} controlView={controlView} ></Answer>
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


