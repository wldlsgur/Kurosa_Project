import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  height: 100px;
`;
const FooterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Footer = () => {
  return (
    <FooterDiv>
      <FooterImg src="/assets/Images/logoHeader.gif"></FooterImg>
    </FooterDiv>
  );
};

export default Footer;
