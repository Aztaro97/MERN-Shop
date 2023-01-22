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
];

function SelectLangButton() {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);

  return (
    <SelectStyling
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
    </SelectStyling>
  );
}

const SelectStyling = styled(Select)`
  max-width: 130px !important;
  & .ant-select-selector {
    padding: 0 !important;
    /* border: 1px solid var(--orange-color) !important; */
    /* border-radius: 30px !important; */
    border: none !important;
    &:focus {
    }
  }

  &:hover {
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    width: 100% !important;
    padding-right: 7px !important;

    & .flag-icon {
      font-size: 0.9rem;
      margin: 0 2px !important;
      padding: 0 3px !important;
    }
    & .ant-select-selector {
      border-radius: 0px !important;
      padding: 0 !important;
    }
  }
`;

export default SelectLangButton;
