import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import fa from "./fa";
import en from "./en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("i18nextLng") ?? "fa",
    resources: {
      fa: {
        translations: fa,
      },
      en: {
        translations: en,
      },
    },
    fallbackLng: "en",
    debug: import.meta.env?.MODE === "development",

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ",",
    },
  });

export default i18n;
export const t = (key, opt) => i18n.t(key, opt);
