import styled, { css } from "styled-components";
import QnaImg from "./QnaImg";
import Footer from "../common/footer";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Answer( {index, item, path, indexAdd, controlView} ) {
    const navigate = useNavigate();
    const [tidx, setTidx] = useState(0);

    const who = item[path].who[tidx];
    const content =  item[path].content[tidx];
    const imgsrc =  item[path].talkimg[tidx];
    
    const contentClick = () =>{
        if(item[path].who.length === tidx+1){
            indexAdd();
            controlView();
        }
        else{
            setTidx(tidx+1);
        }
    }
    if(index === 7 && who === ""){
      return(
        <LightDiv onAnimationEnd={contentClick}></LightDiv>
      );
    }
    if(index === 8 && who === ""){
      return(
        <LoadingDiv>
          <LoadingImg src="/assets/Images/KUROSA.gif" onAnimationEnd={() => {
            return navigate("/result", { replace: true });}}> 
          </LoadingImg>
        </LoadingDiv>
        
      );
    }
    if(index === 3 && tidx === 0){
      return(
          <GlitchD onAnimationEnd={contentClick}></GlitchD>
      );
    }

    if(index === 6 && who === ""){
      return(
        <FootprintDiv>
          <FootImg src={imgsrc} onClick={contentClick}></FootImg>
        </FootprintDiv>
    );
    }

    if(index === 1 && tidx === 1){
      return(
          <FadeoutD>
              <QnaImg url={imgsrc}></QnaImg>
              <ADiv>
                  <AWho>{who}</AWho>
                  <AContentDiv onClick={contentClick}>
                      <AContentP>{content}</AContentP>
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
                <AWho>{who}</AWho>
                <AContentDiv onClick={contentClick}>
                    <AContentP>{content}</AContentP>
                </AContentDiv>
            </ADiv>
            <Footer></Footer>
        </>
    );
}

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
  animation-duration: 2s;

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
  justify-content: space-around;

  animation-name: fadeout;
  animation-duration: 10s;

  @keyframes fadeout {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;
const ADiv = styled.div`
  witdh: 100%;
  flex: 1;
  margin: 0px 7% 0px 7%;
  background-image: url("/assets/Qnaimges/answer.png");
  background-size: 100% 100%;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-left: 7%;
`;

const AWho = styled.p`
  @font-face {
    font-family: "Ycomputer";
    src: url("/assets/Font/Ycomputer.ttf") format("truetype");
  }
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 25px;
  line-height: 46px;
`;

const AContentDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const AContentP = styled.p`
  @font-face {
    font-family: "Ycomputer";
    src: url("/assets/Font/Ycomputer.ttf") format("truetype");
  }
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 20px;
  line-height: 22px;
  white-space: pre-wrap;
  padding: 0 11% 0 0;
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
const LightDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  background: white;
  border-radius: 0%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation-name: light;
  animation-duration: 1.5s;

  @keyframes light {
    from {
        border-radius: 50%;
        width: 1px;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
      }
      75% {
        border-radius: 50%;
      }
      to {
        border-radius: none;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
  }
`;
export default Answer;