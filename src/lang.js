import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translations: require("@/assets/lang/en-US.json")
      },
      zh: {
        translations: require("@/assets/lang/zh-CN.json")
      }
    },
    // fallbackLng: 'zh-CN', // 使用LanguageDetector 取消注释
    fallbackLng: localStorage.getItem("lang") === "en" ? "en" : "zh",
    debug: true,
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    react: {
      wait: true
    }
  });

export default i18n;
