import { useState } from 'react';
import styled from "styled-components";

import Footer from '../components/common/footer';
import Wrapper from "../components/common/Wrapper";
import QnaImg from "../components/qna/QnaImg";
import Question from "../components/qna/Question";
import Answer from "../components/qna/Answer";

import qnaData from "../utils/QnaData.js";


function Qna() {
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
                  <QnaImg url={qnaData[index].imgsrc}></QnaImg>
                  <Question key={index} item={qnaData[index]} pathSet={pathSet}></Question>
                </>
                :
                <>
                  <Answer index={index} item={qnaData[index].talk} path={path} indexAdd={indexAdd} controlView={controlView} ></Answer>
                </>
            }
        </QnaWrap>
    );
}

const QnaWrap = styled(Wrapper)`
    display: flex;
    flex-direction: column;
`;


export default Qna;


