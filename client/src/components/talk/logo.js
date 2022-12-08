import styled from "styled-components";
const LogoDiv = styled.div`
  width: 100%;
  text-align: center;
`;
const LogoImg = styled.img`
  width: 206px;
  height: 243px;
`;

const Logo = ({ url }) => {
  return (
    <LogoDiv>
      <LogoImg src={url}></LogoImg>
    </LogoDiv>
  );
};

export default Logo;
