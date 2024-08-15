import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const ChangeLang = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const langChange = e => {
    setLang(e.target.value);
    localStorage.setItem("lang", e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (

    
    <div>
      <select
        className="selectBox"
        onChange={langChange}
        name="lang"
        value={lang}
      >
        <option className="optionsMenu" value="ar">
          English
        </option>
        <option className="optionsMenu" value="en">
          العربية
        </option>
      </select>
    </div>
  );
};

export default ChangeLang;
