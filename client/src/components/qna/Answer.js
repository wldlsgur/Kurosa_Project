import styled, { css } from "styled-components";
import QnaImg from "./QnaImg";
import Footer from "../common/footer";
import { useState } from 'react';

function Answer( {item, path, indexAdd, controlView} ) {
    const [tidx, setTidx] = useState(0);

    const who = item[path].who[tidx];
    const content =  item[path].content[tidx];
    const imgsrc =  item[path].talkimg[tidx];

    const contentClick = () =>{
        if( item[path].who.length === tidx+1){
            indexAdd();
            controlView();
        }
        else{
            setTidx(tidx+1)
        }
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


const ADiv = styled.div`
  witdh: 100%;
  flex: 1;
  margin: 0px 7% 7% 7%;
  background-image: url("/assets/Qnaimges/answer.png");
  background-size: 100% 100%;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-left: 5%;
`;

const AWho = styled.p`
  @font-face {
    font-family: "Ycomputer";
    src: url("/public/assets/Font/Ycomputer.ttf") format("truetype");
  }
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 32px;
  line-height: 46px;
  flex-basis: 18%;
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
    src: url("/public/assets/Font/Ycomputer.ttf") format("truetype");
  }
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 23px;
  line-height: 26px;
  white-space: pre-wrap;
  padding: 0 14% 0 0;
`;

export default Answer;