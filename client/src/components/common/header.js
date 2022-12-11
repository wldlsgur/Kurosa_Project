import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  height: 80px;
`;
const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Header = () => {
  return (
    <HeaderDiv>
      <HeaderImg src="/assets/Images/logoHeader.gif"></HeaderImg>
    </HeaderDiv>
  );
};

export default Header;
