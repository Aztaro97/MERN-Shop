import React, { useEffect, useState } from "react";
import { Select } from "antd";
import styled from "styled-components";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },

  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "ae",
  },
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
];

function SelectLangButton() {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("welcome_message");
  }, [currentLanguage, t]);

  return (
    <SelectC
      style={{ width: 150 }}
      onChange={(value) => i18next.changeLanguage(value)}
      defaultValue={
        currentLanguageCode === "en" ? (
          <>
            <span
              style={{ paddingRight: "40px" }}
              className={`flag-icon flag-icon-gb`}
            ></span>
            {t("name")}
          </>
        ) : currentLanguageCode === "ar" ? (
          <>
            <span
              style={{ paddingRight: "40px" }}
              className={`flag-icon flag-icon-ae`}
            ></span>
            {t("name")}
          </>
        ) : (
          <>
            <span
              style={{ paddingRight: "40px" }}
              className={`flag-icon flag-icon-fr`}
            ></span>
            {t("name")}
          </>
        )
      }
    >
      {languages.map(({ code, name, country_code }, index) => (
        <Option
          key={index}
          onClick={() => {
            i18next.changeLanguage(code);
            console.log({ code });
          }}
          value={code}
        >
          <span
            style={{ paddingRight: "40px" }}
            className={`flag-icon flag-icon-${country_code}`}
          ></span>
          {name}
        </Option>
      ))}
    </SelectC>
  );
}

const SelectC = styled(Select)`
  /* border: 1px solid red; */
  /* border: 1px solid var(--orange-color); */
  border-radius: 80px;
  @media only screen and (max-width: 380px) {
    width: 90px !important;
    padding: 2px; 

    & .flag-icon {
      font-size: 1rem;
      padding-right: 5px;
    }
  }

  & .ant-select-selector {
    border: 1px solid var(--orange-color) !important;
    border-radius: 30px !important;
    /* border: none; */
    &:focus {
    }
  }

  &:hover {
  }
`;

export default SelectLangButton;
