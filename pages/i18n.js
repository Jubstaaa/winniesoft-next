import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  tr: {
    translation: {
      turkish: "Türkçe",
      english: "İngilizce",
      language: "Dil",
      contact: "İletişim",
      team: "Ekip",
      projects: "Projeler",
      services: "Hizmetler",
      about: "Hakkımızda",
      home: "Anasayfa",
    },
  },
  en: {
    translation: {
      turkish: "Turkish",
      english: "English",
      language: "Language",
      contact: "Contact",
      team: "Team",
      projects: "Projects",
      services: "Services",
      about: "About",
      home: "Home",
    },
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: "tr",
  resources,
});

export default i18n;
