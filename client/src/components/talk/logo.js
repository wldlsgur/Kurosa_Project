import styled from "styled-components";
const LogoDiv = styled.div`
  width: 100%;
  flex: 1 1 55%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 250px;
  height: 232px;
  object-fit: cover;
`;

const Logo = ({ index, url }) => {
  return (
    <LogoDiv>
      <LogoImg src={url}></LogoImg>
    </LogoDiv>
  );
};

export default Logo;
