import styled from "styled-components";
const LogoDiv = styled.div`
  witdh: 100%;
  flex 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 261px;
  height: 262px;
`;

const StartLogo = () => {
  return (
    <LogoDiv>
      <LogoImg src={"/assets/Images/logoCircle.png"}></LogoImg>
    </LogoDiv>
  );
};

export default StartLogo;
