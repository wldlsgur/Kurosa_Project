import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Warring = ({ fontStyle, updateMain }) => {
  const { t, i18n } = useTranslation();
  const warring = t("warring", { returnObjects: true });

  return (
    <WarringDiv fontStyle={fontStyle}>
      <WarringTitle>{t(warring.Title)}</WarringTitle>
      <WarringContent>{t(warring.Content)}</WarringContent>
      <WarringBtn
        fontStyle={fontStyle}
        type="button"
        value="OK"
        onClick={() => {
          updateMain("logo");
        }}
      ></WarringBtn>
      <FooterImg src="assets/Images/warringFooter.gif"></FooterImg>
    </WarringDiv>
  );
};
const WarringDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 35px 0px 35px;
  font-family: ${(props) => props.fontStyle || "none"};
`;

const CommonStyled = styled.p`
  color: #00ff00;
  font-weight: 400px;
  animation-name: fadeOut;
  animation-duration: 5s;
`;
const WarringTitle = styled(CommonStyled)`
  font-size: 40px;
  line-height: 46px;
  margin-bottom: 46px;
`;
const WarringContent = styled(CommonStyled)`
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  margin-bottom: 96px;
  margin-top: 30px;
`;
const WarringBtn = styled.input`
  color: #00ff00;
  font-weight: 400px;
  animation-name: fadeOut;
  animation-duration: 5s;
  border: none;
  background-color: black;
  font-size: 40px;
  line-height: 46px;
  text-shadow: -2px 0 #888888, 0 2px #888888, 2px 0 #888888, 0 -2px #888888;
  font-family: ${(props) => props.fontStyle || "none"};
`;
const FooterImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 100;
  height: 100px;
`;

export default Warring;
