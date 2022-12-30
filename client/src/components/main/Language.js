import styled from "styled-components";
import i18n from "../../utils/i18n";

const Laguage = ({ updateMain }) => {
  return (
    <LaguagesDiv>
      <LaguageDiv>
        <LuaguesKrP
          onClick={(e) => {
            i18n.changeLanguage("kr");
            e.currentTarget.nextSibling.style.display = "block";
            setTimeout(() => {
              updateMain("warring");
            }, 1000);
          }}
        >
          한국어
        </LuaguesKrP>
        <ChoiceImg src="/assets/Images/choice.png"></ChoiceImg>
      </LaguageDiv>
      <LaguageDiv>
        <LuaguesJpP
          onClick={(e) => {
            i18n.changeLanguage("jp");
            e.currentTarget.nextSibling.style.display = "block";
            setTimeout(() => {
              updateMain("warring");
            }, 1000);
          }}
        >
          日本語
          <ChoiceImg src="/assets/Images/choice.png"></ChoiceImg>
        </LuaguesJpP>
      </LaguageDiv>
    </LaguagesDiv>
  );
};
const ChoiceImg = styled.img`
  witdh: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
  display: none;
`;

const LaguagesDiv = styled.div`
  witdh: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const LaguageDiv = styled.div`
  position: relative;
  margin: 10%;
`;

const LuaguesKrP = styled.p`
  font-family: "Ycomputer";
  font-weight: 700px;
  font-size: 40px;
  line-height: 40px;
  color: #00ff00;
`;
const LuaguesJpP = styled.p`
  font-family: "JFDotKappa200213";
  font-weight: 700px;
  font-size: 40px;
  line-height: 40px;
  color: #00ff00;
`;
export default Laguage;
