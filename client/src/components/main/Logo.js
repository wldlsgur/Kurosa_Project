import styled from "styled-components";

const Logo = () => {
  return (
    <LogoDiv>
      <LogoImg src="/assets/Images/KUROSA.gif" alt="logoImage"></LogoImg>
    </LogoDiv>
  );
};

const LogoDiv = styled.div`
  height: 100%;
  padding: 0px 10% 0px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export default Logo;
