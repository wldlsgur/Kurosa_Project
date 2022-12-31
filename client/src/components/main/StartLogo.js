import styled from "styled-components";

const LogoDiv = styled.div`
  witdh: 100%;
  flex 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const LogoImg = styled.img`
  width: 361px;
  height: auto;
`;

const StartLogo = () => {
  return (
    <LogoDiv>
      <LogoImg src={"/assets/Images/logoCircle.gif"}></LogoImg>
    </LogoDiv>
  );
};

export default StartLogo;
