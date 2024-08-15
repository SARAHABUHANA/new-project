import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        Login: " تسجيل الدخول",
        Customers:"الزبائن",
        Home:" الرئيسية",
        Menu:"القائمة",
        About:"من نحن",
        services:"الخدمات",
        Categories:"الأقسام",
        Profile:"الملف الشخصي",
        Register:"إنشاء حساب ",
        "sign up":"إنشاء حساب  ",
        "Best  Design of Furnitur":"أفضل التصاميم من الأثاث",
        Password:"كلمة المرور",
        Email:"البريد الإلكتروني",
        "Phone number":"رقم الهاتف ",
        "Full name":"الاسم الكامل ",
        "New Account":"حساب جديد"
        
      }
    },
    ar: {
      translation: {
        "تسجيل الدخول": "Login",
        "الزبائن":"Customers",
        " الرئيسية ":"Home",
        "القائمة":"Menu",
        "تسجيل الدخول ":"sign in",
        "الخدمات":"services",
         "الأقسام": "Categories",
         "الملف الشخصي":"Profile",
         "تسجيل الدخول ":"Sign up",
         " إنشاء حساب "  :"sign up",
         "أفضل التصاميم من الأثاث":"Best  Design of Furnitur",
         "الاسم الكامل ":"Full name",
         "كلمة المرور":"password",
         "البريد الإلكتروني":"Email",
         "رقم الهاتف ":"phone number",
         "حساب جديد":"New Account",
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
