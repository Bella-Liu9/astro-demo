import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import zhTrans from "./public/locals/zh/translation.json";
import enTrans from "./public/locals/en/translation.json";
import jaTrans from "./public/locals/ja/translation.json";
import spTrans from "./public/locals/sp/translation.json";
import hiTrans from "./public/locals/hi/translation.json";
import ruTrans from "./public/locals/ru/translation.json";
import beTrans from "./public/locals/be/translation.json";
import inTrans from "./public/locals/in/translation.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        translation: zhTrans,
      },
      en: {
        translation: enTrans,
      },
      ja: {
        translation: jaTrans,
      },
      sp: {
        translation: spTrans,
      },
      hi: {
        translation: hiTrans,
      },
      ru: {
        translation: ruTrans,
      },
      be: {
        translation: beTrans,
      },
      in: {
        translation: inTrans,
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
