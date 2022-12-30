import style from "../../styles/Main/warring/warring.module.css";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Warring = (props) => {
  const changeLogo = props.updateMain;
  const { t, i18n } = useTranslation();
  const warring = t("warring", { returnObjects: true });

  return (
    <div className={style.warring}>
      <p className={style.warring__title}>{t(warring.Title)}</p>
      <p className={style.warring__content}>{t(warring.Content)}</p>
      <input
        type="button"
        value="OK"
        className={style.warring__btn}
        onClick={() => {
          changeLogo("logo");
        }}
      ></input>
      <FooterImg src="assets/Images/warringFooter.gif"></FooterImg>
    </div>
  );
};

const FooterImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 100;
  height: 100px;
`;

export default Warring;
