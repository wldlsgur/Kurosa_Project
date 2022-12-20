import styled from "styled-components";

function Qusetion( {item, pathSet} ) {
    const question = item.question;
    const answer = item.answer;
    const questionClick = (idx)=>{
        pathSet(idx)
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
            {
                answer.map((item, idx) => 
                    <div><QContentP onClick={() => questionClick(idx)} key={idx} >{item}</QContentP></div>
                )
            }
        </QDiv>
    );
}

const QDiv = styled.div`
  witdh: 100%;
  flex: 1 1 55%;
  margin: 0px 7% 7% 7%;
  background-image: url("/assets/Qnaimges/question.png");
  background-size: 100% 100%;
  overflow: hidden;
  padding : 4% 6% 0 5%;
  
  display: grid;
  grid-template-columns: 7% 90%;
  grid-template-rows: 30% 13% 18% 18%; 
  grid-auto-flow : column;
  grid-column-gap : 2%;
  grid-row-gap: 5%;
  
  @media screen and (min-height: 770px) {
    @media screen and (min-width: 850px){
        padding : 5% 6% 0 5%;
    }
    padding : 10% 6% 0 5%;
  }
  
  @media screen and (min-width: 950px) {
    padding : 2% 6% 0 5%;
  }
`;

const QTitle = styled.p`
  @font-face {
    font-family: "Ycomputer";
    src: url("/public/assets/Font/Ycomputer.ttf") format("truetype");
  }
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 20px;
  line-height: 24px;
`;

const QContentP = styled.p`
  @font-face {
    font-family: "Ycomputer";
    src: url("/public/assets/Font/Ycomputer.ttf") format("truetype");
  }
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 17px;
  line-height: 22px;
  padding: 0 7% 0 0;

  
`;
export default Qusetion;