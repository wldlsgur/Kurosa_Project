import styled from "styled-components";
const LogoDiv = styled.div`
  witdh: 100%;
  height: 40%;
  text-align: center;
`;
const LogoImg = styled.img`
  witdh: 200px;
  height: 200px;
`;

const StartLogo = () => {
  return (
    <LogoDiv>
      <LogoImg src={"/assets/Images/logoCircle.png"}></LogoImg>
    </LogoDiv>
  );
};

export default StartLogo;
