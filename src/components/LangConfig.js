import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        Login: "تسجيل الدخول",
        Customers:"الزبائن",
        Home:"الصفحةالرئيسية",
        Menu:"القائمة",
        About:"من نحن",
        services:"الخدمات",
        Categories:"الأقسام",
        Profile:"الملف الشخصي",
        Register:"إنشاء حساب ",
        Sign_Up:"تسجيل الدخول "
        
      }
    },
    ar: {
      translation: {
        "تسجيل الدخول": "Login",
        "الزبائن":"Customers",
        "الصفحة الرئيسية ":"Home",
        "القائمة":"Menu",
        "تسجيل الدخول ":"Sign Up",
        "الخدمات":"services",
         "الأقسام": "Categories",
         "الملف الشخصي":"Profile",
         "تسجيل الدخول ":"Sign Up",
         " إنشاء حساب "  :"Register"
       
      }
    },
    sp: {
      translation: {
        Hi: "Hola",
        Actions: "Comportamiento"
      }
    },
    tl: {
      translation: {
        Hi: "హాయ్",
        Actions: "చర్యలు"
      }
    }
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;
