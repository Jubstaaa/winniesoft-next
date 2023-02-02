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
      heroTitle1: "Biz Orjinal İşler Yapıyoruz",
      heroTitle2: "Biz Eğlenceli İşler Yapıyoruz",
      heroTitle3: "Biz Yaratıcı İşler Yapıyoruz",
      heroDesc:
        "Müthiş projeler üreten yetenekli geliştiricilerden oluşan bir ekibiz.",
      heroButton: "Hadi Başlayalım",
      aboutTitle: "Neler yapıyoruz?",
      aboutDesc:
        "İsteklerinize uygun projeler yapıyoruz. Bazı insanlar sihir yaptığımızı söylüyor. Şaka yapmıyorlar, gerçekten sihir yapıyoruz.",
      aboutBox1Title: "Proje bazlı çalışma",
      aboutBox1Desc:
        "Önceliğimiz projenizdir. İşlerimizi mümkün olan en hızlı şekilde yapıyoruz.",
      aboutBox2Title: "Güncel teknolojiler",
      aboutBox2Desc:
        "Sistemleriniz için en güncel yapıları ve kütüphaneleri kullanıyoruz.",
      aboutBox3Title: "Sürekli iletişim",
      aboutBox3Desc:
        "Geliştirme sırasında doğrudan bizimle iletişime geçebilirsiniz.",
      aboutBox4Title: "Proje sonrası destek",
      aboutBox4Desc:
        "Projeniz sonrasında destek veriyor ve revizelerinizi kabul ediyoruz.",
      servicesTitle: "Hizmetler",
      servicesDesc:
        "Sizlere en iyi hizmeti vermek için çok çalışıyoruz. En güncel teknolojiler ve en iyi çözüm ortakları ile çalışıyoruz.",
      servicesBox1Title: "Oyun Geliştirme",
      servicesBox1Desc:
        "İsteklerinize göre her platforma uygun oyunlar geliştiriyoruz.",
      servicesBox2Title: "Mobil Uygulama Geliştirme",
      servicesBox2Desc: "İsteklerinize göre mobil uygulamalar geliştiriyoruz",
      servicesBox3Title: "Web Geliştirme",
      servicesBox3Desc:
        "Hızlı, mobil uyumlu, dinamik web uygulamaları ve siteleri yapıyoruz.",
      projectsTitle: "Projeler",
      projectsDesc:
        "Yaptığımız projeleri inceleyebilir, herkese açık olanların kaynak kodlarını görüntüleyebilir, demoları deneyebilir ve oynayabilirsiniz.",
      projectsCategory1: "Mobil Oyun / Uygulama",
      projectsCategory2: "Klon Oyun",
      projectsCategory3: "Web Uygulama",
      projectsMore: "Daha Fazla",
      teamTitle: "Ekip",
      teamDesc:
        "Alanında deneyimli ve sürekli kendini geliştiren ekibimizle tanışın.",
      contactTitle: "İletişim",
      contactEmpty: "Henüz Yok 😔",
      contactAddressTitle: "Adresimiz",
      contactEmail: "Email",
      contactPhone: "Telefon",
      contactFormName: "Adınız",
      contactFormEmail: "Email Adresiniz",
      contactFormSubject: "Konu",
      contactFormMessage: "Mesaj",
      contactFormButton: "Mesaj Gönder",
      contactFormLoading: "Lütfen Bekleyin",
      contactFormSuccess: "Mesajınız gönderildi. Teşekkür ederiz!",
      contactFormError: "Mesajınız gönderilemedi. Lütfen tekrar deneyin.",
      footerNewsletterTitle: "Bültenimize Katılın",
      footerNewsletterDesc: "En son projelerimizden haberdan olun.",
      footerNewsletterButton: "Abone Ol",
      copyright1: "",
      copyright2: "Tüm Hakları Saklıdır",
      privacyPolicy: "Gizlilik Politikası",
      singleProjectTitle: "Proje Hakkında",
      singleProjectCategory: "Kategori",
      singleProjectOwner: "Proje Sahibi",
      singleProjectDate: "Proje Tarihi",
      singleProjectUrl: "Proje Linki",
      singleProjectDemo: "Proje Demosu",
      singleProjectDesc: "Uygulaması",
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
      heroTitle1: "We Make Original Things",
      heroTitle2: "We Make Fun Things",
      heroTitle3: "We Make Creative Things",
      heroDesc: "We are team of talented developers making nice softwares.",
      heroButton: "Get Started",
      aboutTitle: "What are we doing?",
      aboutDesc:
        "We make suitable projects according to your wishes. Some people say we do magic. They are not kidding we really do magic.",
      aboutBox1Title: "Project based work",
      aboutBox1Desc:
        "Our priority is your project. We do our work as quickly as possible.",
      aboutBox2Title: "Current technologies",
      aboutBox2Desc:
        "We use the most up-to-date structures and frameworks for your systems.",
      aboutBox3Title: "Continuous communication",
      aboutBox3Desc: "You can contact us directly during the process.",
      aboutBox4Title: "Post-project support",
      aboutBox4Desc:
        "We provide support after your project and accept your revisions.",
      servicesTitle: "Services",
      servicesDesc:
        "We are working hard to give you best service. We work with the most up-to-date technologies and best solution partners.",
      servicesBox1Title: "Game Development",
      servicesBox1Desc:
        "We develop games suitable for every platform according to.",
      servicesBox2Title: "Mobile App Development",
      servicesBox2Desc:
        "We develop mobile applications according to your wishes.",
      servicesBox3Title: "Web Development",
      servicesBox3Desc: "We make fast, responsive, dynamic web apps and sites.",
      projectsTitle: "Projects",
      projectsDesc:
        "You can review the projects we have made, view source codes of public ones, try and play demos.",
      projectsCategory1: "Mobile Game / App",
      projectsCategory2: "Clone Game",
      projectsCategory3: "Web App",
      projectsMore: "More",
      teamTitle: "Team",
      teamDesc:
        "Meet our team who are experienced in their fields and constantly improve themselves.",
      contactTitle: "Contact",
      contactEmpty: "Not Yet 😔",
      contactAddressTitle: "Our Address",
      contactEmail: "Email Us",
      contactPhone: "Call Us",
      contactFormName: "Your Name",
      contactFormEmail: "Your Email",
      contactFormSubject: "Subject",
      contactFormMessage: "Message",
      contactFormButton: "Send Message",
      contactFormLoading: "Loading",
      contactFormSuccess: "Your message has been sent. Thank you!",
      contactFormError: "Your message could not be sent. Please try again.",
      footerNewsletterTitle: "Join Our Newsletter",
      footerNewsletterDesc: "Stay in tune with our latest projects.",
      footerNewsletterButton: "Subscribe",
      copyright1: "Copyright",
      copyright2: "All Right Reserved",
      privacyPolicy: "Privacy Policy",
      singleProjectTitle: "Project Information",
      singleProjectCategory: "Category",
      singleProjectOwner: "Owner",
      singleProjectDate: "Project Date",
      singleProjectUrl: "Project URL",
      singleProjectDemo: "Project Demo",
      singleProjectDesc: "App",
    },
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: "tr",
  resources,
});

export default i18n;
