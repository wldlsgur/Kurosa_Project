import styled from "styled-components";
import Dotdiv from "./Dot";

const LogoDiv = styled.div`
  witdh: 100%;
  flex 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const LogoImg = styled.img`
  width: 261px;
  height: 262px;
`;

const StartLogo = ({ dotState }) => {
  return (
    <LogoDiv>
      <LogoImg src={"/assets/Images/logoCircle.png"}></LogoImg>
      <Dotdiv state={dotState}></Dotdiv>
    </LogoDiv>
  );
};

export default StartLogo;
