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
  font-family: "Ycomputer";
  font-weight: 700px;
  font-size: 40px;
  line-height: 40px;
  color: #00ff00;
  background: none;
  border: none;
  margin: 10%;
`;
const JapanP = styled.button`
  font-family: "JFDotKappa200213";
  font-style: normal;
  font-weight: 700px;
  font-size: 35px;
  line-height: 38px;
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
