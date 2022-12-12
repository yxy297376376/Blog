import React, { useState, useEffect } from "react";
import i18next from "i18next";

const ChangeLanguage = ({
  style,
  className
}: {
  style?: React.CSSProperties;
  className?: string;
}) => {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "zh-CN"
  );

  useEffect(() => {
    setLang(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "zh-CN"
    );
  }, []);

  function handleChangeLang() {
    if (lang == "zh") {
      setLang("en");
      localStorage.setItem("lang", "en");
    } else {
      setLang("zh");
      localStorage.setItem("lang", "zh");
    }
    i18next.changeLanguage(lang == "zh" ? "en" : "zh", error => {
      // console.log(error);
    });
  }

  return (
    <div
      onClick={handleChangeLang}
      style={{
        cursor: "pointer",
        margin: "0 3px",
        ...style
      }}
      className={className}
    >
      {lang == "en" ? "中" : "英"}
    </div>
  );
};

export default ChangeLanguage;
