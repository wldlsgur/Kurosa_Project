import { useTranslation } from "react-i18next";

const useFontStyle = () => {
  const { t, i18n } = useTranslation();
  return i18n.language === "kr" ? "Ycomputer" : "JFDotKappa200213";
};

export default useFontStyle;
