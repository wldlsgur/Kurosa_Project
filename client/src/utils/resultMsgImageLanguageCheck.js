import i18n from "./i18n";

const resultMsgImageLanguageCheck = () => {
  return i18n.language === "kr"
    ? "/assets/Images/resultMsg.png"
    : "/assets/Images/resultMsgJp.png";
};

export default resultMsgImageLanguageCheck;
