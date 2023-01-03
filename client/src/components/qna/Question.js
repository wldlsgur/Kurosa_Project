import { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

function Qusetion( {item, pathSet} ) {
    const question = item.question;
    const answerA = item.answer[0];
    const answerB = item.answer[1];
    const answerC = item.answer[2];

    const [aAnswer, setaAnswer] = useState('');
    const [bAnswer, setbAnswer] = useState('');
    const [cAnswer, setcAnswer] = useState('');

    const [acount, setaCount] = useState(0);
    const [bcount, setbCount] = useState(0);
    const [ccount, setcCount] = useState(0);

    useEffect(() => {
      if (acount >= answerA.length) return;
      const typingInterval = setInterval(() => {
        setaAnswer((value) => {
          let resulta = value ? value + answerA[acount] : answerA[0];
          setaCount(acount + 1);

          return resulta;
        });
      }, 100);
      return () => {
        clearInterval(typingInterval);
      };
    }, [acount, aAnswer]);
    useEffect(() => {
      if (bcount >= answerB.length) return;
      const typingInterval = setInterval(() => {
        setbAnswer((value) => {
          let resultb = value ? value + answerB[bcount] : answerB[0];
          setbCount(bcount + 1);

          return resultb;
        });
      }, 100);
      return () => {
        clearInterval(typingInterval);
      };
    }, [bcount, bAnswer]);
    useEffect(() => {
      if (ccount >= answerC.length) return;
      const typingInterval = setInterval(() => {
        setcAnswer((value) => {
          let resultc = value ? value + answerC[ccount] : answerC[0];
          setcCount(ccount + 1);
  
          return resultc;
        });
      }, 100);
      return () => {
        clearInterval(typingInterval);
      };
    }, [ccount, cAnswer]);

    const questionClick = (idx)=>{
        pathSet(idx)
    }

    if(answerB === "" || answerC === ""){
      return (
        <InputDiv>
            <div><QTitle>?</QTitle></div>
            <div>
                <QTitle>{question}</QTitle>    
            </div>
            <div><QContentP></QContentP></div>
            <QContentP >{aAnswer}</QContentP>
            <div><QContentP></QContentP></div>
            <InputText></InputText>
            <div></div>
            <ImgDiv><InputBtn onClick={() => questionClick(0)} src="/assets/Qnaimges/inputbtn.png"></InputBtn></ImgDiv>
        </InputDiv>
      );
    }
    return (
        <QDiv>
            <div><QTitle>?</QTitle></div>
            <div><QContentP>a.</QContentP></div>
            <div><QContentP>b.</QContentP></div>
            <div><QContentP>C.</QContentP></div>
            <div>
                <QTitle>{question}</QTitle>    
            </div>
            <QContentP onClick={() => questionClick(0)}>{aAnswer}</QContentP>
            <QContentP onClick={() => questionClick(1)}>{bAnswer}</QContentP>
            <QContentP onClick={() => questionClick(2)}>{cAnswer}</QContentP>
        </QDiv>
    );
}


// {
//   answer.map((item, idx) => 
//       <div key={idx}><QContentP onClick={() => questionClick(idx)}>{item}</QContentP></div>
//   )
// }

const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10%; 
`;

const InputBtn = styled.img`
  width: 25px;
  height: 17px;
`;
const InputDiv = styled.div`
  witdh: 100%;
  flex: 1 1 55%;
  margin: 0px 7% 7% 7%;
  background-image: url("/assets/Qnaimges/question.png");
  background-size: 100% 100%;
  overflow: hidden;
  padding : 8% 6% 0 6%;
  
  display: grid;
  grid-template-columns: 7% 90%;
  grid-template-rows: 30% 9% 30%; 
  grid-auto-flow : row;
  grid-column-gap : 2%;
  grid-row-gap: 5%;
  
  @media screen and (min-height: 800px) {
    @media screen and (min-width: 680px){
        padding : 5% 5% 0 5%;
    }
    padding : 13% 5% 0 5%;
  }
  
  @media screen and (min-width: 950px) {
    padding : 2% 5% 0 5%;
  }
`;
const InputText = styled.textarea`
  background: black;
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 17px;
  margin-right: 10%;
`;

const QDiv = styled.div`
  witdh: 100%;
  flex: 1 1 55%;
  margin: 0px 7% 7% 7%;
  background-image: url("/assets/Qnaimges/question.png");
  background-size: 100% 100%;
  overflow: hidden;
  padding : 8% 6% 0 6%;
  
  display: grid;
  grid-template-columns: 7% 90%;
  grid-template-rows: 30% 18% 18% 18%; 
  grid-auto-flow : column;
  grid-column-gap : 2%;
  grid-row-gap: 5%;
  
  @media screen and (min-height: 800px) {
    @media screen and (min-width: 680px){
        padding : 5% 5% 0 5%;
    }
    padding : 13% 5% 0 5%;
  }
  
  @media screen and (min-width: 950px) {
    padding : 2% 5% 0 5%;
  }
`;

const QTitle = styled.p`
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 21px;
  line-height: 24px;
`;

const QContentP = styled.p`
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 17px;
  line-height: 22px;
  padding: 0 7% 0 0;
`;
export default Qusetion;