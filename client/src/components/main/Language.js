import styled from "styled-components";
import i18n from "../../utils/i18n";

const LaguageDiv = styled.div`
  witdh: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const KoreaP = styled.button`
  @font-face {
    font-family: "Ycomputer";
    src: url("/public/assets/Font/Ycomputer.ttf") format("truetype");
  }
  font-family: "Ycomputer";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #00ff00;
  background: none;
  border: none;
  margin: 10%;
`;
const JapanP = styled.button`
  @font-face {
    font-family: "JFDotKappa200213";
    src: url("/public/assets/Font/JFDotKappa200213.ttf") format("truetype");
  }
  font-family: "JJFDotKappa200213";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  color: #00ff00;
  background: none;
  border: none;
  margin: 10%;
`;

const Laguage = ({ updateMain }) => {
  return (
    <LaguageDiv>
      <KoreaP
        onClick={() => {
          i18n.changeLanguage("kr");
          updateMain("warring");
        }}
      >
        한국어
      </KoreaP>
      <JapanP
        onClick={() => {
          i18n.changeLanguage("jp");
          updateMain("warring");
        }}
      >
        日本語
      </JapanP>
    </LaguageDiv>
  );
};

export default Laguage;
