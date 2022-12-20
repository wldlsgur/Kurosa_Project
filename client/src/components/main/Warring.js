import style from "../../styles/Main/warring/warring.module.css";
import { useTranslation } from "react-i18next";

const Warring = (props) => {
  const changeLogo = props.updateMain;
  const { t } = useTranslation();

  return (
    <div className={style.warring}>
      <p className={style.warring__title}>{t("Title")}</p>
      <p className={style.warring__content}>{t("Content")}</p>
      <input
        type="button"
        value="OK"
        className={style.warring__btn}
        onClick={() => {
          changeLogo("logo");
        }}
      ></input>
    </div>
  );
};

export default Warring;
