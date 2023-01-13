import styled, { css } from "styled-components";
import QnaImg from "./QnaImg";
import Footer from "../common/footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useFontStyle from "../../utils/useFontStyle";
import effectSound from "../../hooks/effectSound";
import { Howler } from 'howler';
import { useSelector, useDispatch } from "react-redux";
import { tidxadd, qnainit } from "../../store/actions/qna/qnaindex";
import { changeView } from "../../store/actions/qna/changeView";

function Answer( ) {
  const navigate = useNavigate();
  const fontStyle = useFontStyle();
  const { t, i18n } = useTranslation();
  const T = t("qna", { returnObjects: true });
  const dispatch = useDispatch();

  const qnaState = useSelector((state) => state.qnaIndexReducer);
  console.log(qnaState);
  const index = qnaState.index;
  const path = qnaState.path;
  const tidx = qnaState.tidx;

  const who = T[index].talk[path].who[tidx];
  const content =  T[index].talk[path].content[tidx];
  const imgsrc =  T[index].talk[path].talkimg[tidx];
  
  const contentClick = () =>{
      if(T[index].talk[path].who.length === tidx+1){
        dispatch(qnainit());
        dispatch(changeView());
      }
      else{
        dispatch(tidxadd());
      }
  }
  if(index === 6 && tidx === 3){
    const us = effectSound("/assets/Sound/transform.mp3", 1);
    us.play();
  }
  if(index === 6 && tidx === 13){
    const us = effectSound("/assets/Sound/seasound.mp3", 0.1, true);
    us.play();
    
  }
  if(index === 6 && tidx === 12){
    Howler.stop();
  }
  if(index === 8 && who === ""){
    Howler.stop();
    const us = effectSound("/assets/Sound/loading.mp3", 1, true);
    us.play();
    return(
      <LoadingDiv>
        <LoadingImg src="/assets/Qnaimges/loading.gif" onAnimationEnd={() => {
          return navigate("/result", { replace: true });}}> 
        </LoadingImg>
      </LoadingDiv>
    );
  }
  if(index === 7 && tidx === 1){
    return(
      <>
        <QnaImg url={imgsrc} ck="true"></QnaImg>
        <ADiv>
          <AWhoDiv>
            <AWho font={fontStyle}>{who}</AWho>
          </AWhoDiv>
          <AContentDiv onClick={contentClick}>
            <AContentP font={fontStyle}>{content}
            </AContentP>
          </AContentDiv>
        </ADiv>
        <Footer></Footer>
      </>
    );
  }
  if(index === 3 && tidx === 0){
    const us = effectSound("/assets/Sound/glitch.mp3", 1);
    us.play();
    return(
        <GlitchD onAnimationEnd={contentClick}></GlitchD>
    );
  }

  if(index === 6 && who === ""){
    return(
      <FootprintDiv>
        <FootImg src={imgsrc} onClick={ ()=>{
            let us = effectSound("/assets/Sound/footprint.mp3", 1);
            us.play();
            contentClick();
          }
          }></FootImg>
      </FootprintDiv>
  );
  }

  if(index === 1 && tidx === 1){
    return(
      <FadeoutD>
        <QnaImg url={imgsrc}></QnaImg>
        <ADiv>
          <AWhoDiv>
            <AWho font={fontStyle}>{who}</AWho>
          </AWhoDiv>
          <AContentDiv onClick={contentClick}>
            <AContentP font={fontStyle}>{content}</AContentP>
          </AContentDiv>
        </ADiv>
        <Footer></Footer>
      </FadeoutD>
    );
  }
  return(
    <>
      <QnaImg url={imgsrc}></QnaImg>
      <ADiv>
        <AWhoDiv>
          <AWho font={fontStyle}>{who}</AWho>
        </AWhoDiv>
        <AContentDiv onClick={contentClick}>
          <AContentP font={fontStyle}>{content}
          </AContentP>
        </AContentDiv>
      </ADiv>
      <Footer></Footer>
    </>
  );
}

const ADiv = styled.div`
  witdh: 100%;
  flex: 1;
  margin: 0px 7% 0px 7%;
  background-image: url("/assets/Qnaimges/answer.png");
  background-size: 100% 100%;
  
  display: flex;
  flex-direction: column;
  
`;

const AWhoDiv = styled.div`
  width: 45%;
  height: 17%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ycomputer";
  color: #00ff00;
  line-height: 46px;
  
`;

const AWho = styled.p`
  font-family: ${(props) => props.font || "Ycomputer"};
  color: #00ff00;
  font-size: 25px;
  
`;

const AContentDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 12% 0 12%;
`

const AContentP = styled.p`
  font-family: ${(props) => props.font || "Ycomputer"};
  color: #00ff00;
  font-size: ${(props) => props.font==="Ycomputer" ? 17 : 15}px;
  white-space: pre-wrap;
`;

const LoadingDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const LoadingImg = styled.img`
  height: 30%;

  animation-name: loading;
  animation-duration: 6s;

  @keyframes loading {
    from {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
`;

const GlitchD = styled.div`
  flex: 1;
  background-image: url("/assets/Qnaimges/glitch.gif");
  background-size: 100% 100%;
  
  animation-name: glitch;
  animation-duration: 2s;

  @keyframes glitch {
    from {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
`;

const FadeoutD = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  animation-name: fadeOut;
  animation-duration: 7s;
`;
const FootprintDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FootImg = styled.img`
  width: 300px;
  height: 590px;
`;
export default Answer;