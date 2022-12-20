import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import WarringDataKor from "./WarringDataKor";
import WarringDataJp from "./WarringDataJp";

const resource = {
  kr: {
    translation: WarringDataKor,
  },
  jp: {
    translation: WarringDataJp,
  },
};
i18n.use(initReactI18next).init({
  resources: resource,
  lng: "kr",
  fallbackLng: "kr",
  debug: true,
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
