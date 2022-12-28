import styled from "styled-components";

const LogoDiv = styled.div`
  width: 100%;
  flex: 1 1 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: fadeOut;
  animation-duration: 5s;
`;
const LogoImg = styled.img`
  width: 250px;
  height: 232px;
  object-fit: cover;
`;
const YouLogoImg = styled(LogoImg)`
  opacity: 0.5;
`;

const Logo = ({ url, title }) => {
  return (
    <LogoDiv>
      {title === "YOU" || title === "占い師うさ" ? (
        <YouLogoImg src={url}></YouLogoImg>
      ) : (
        <LogoImg src={url}></LogoImg>
      )}
    </LogoDiv>
  );
};

export default Logo;
