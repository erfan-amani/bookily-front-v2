import enIcon from "../assets/images/languages/en.png";
import faIcon from "../assets/images/languages/fa.png";

export const isMobile =
  "ontouchstart" in window ||
  "onmsgesturechange" in window ||
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export const LANGUAGES = {
  fa: { id: "fa", name: "farsi", icon: faIcon, dir: "rtl", opposite: "en" },
  en: { id: "en", name: "english", icon: enIcon, dir: "ltr", opposite: "fa" },
};
