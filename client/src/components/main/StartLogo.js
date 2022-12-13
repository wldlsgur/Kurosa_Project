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
  width: 261px;
  height: 262px;
`;
const Dotdiv = styled.div`
  width: 30px;
  height: 30px;
  background: white;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: fullscreen;
  animation-duration: 1s;

  @keyframes fullscreen {
    from {
    }

    to {
      witdh: 100%;
      height: 100vh;
    }
  }
`;
const StartLogo = () => {
  return (
    <LogoDiv>
      <LogoImg src={"/assets/Images/logoCircle.png"}></LogoImg>
      <Dotdiv></Dotdiv>
    </LogoDiv>
  );
};

export default StartLogo;
