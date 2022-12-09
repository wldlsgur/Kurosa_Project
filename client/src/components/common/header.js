import styled from "styled-components";
import headerImg from "/public/assets/Images/logoHeader.gif";
const HeaderDiv = styled.div`
  width: 100%;
`;
const HeaderImg = styled.img`
  witdh: 100%;
  object-fit: cover;
`;
const Header = () => {
  <HeaderDiv>
    <HeaderImg src={headerImg}></HeaderImg>
  </HeaderDiv>;
};

export default Header;
