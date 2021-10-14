import React from "react";
import { Helmet } from "react-helmet";
import { Translation } from "react-i18next";

function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}
const TranslateContent = (contents) => {
  return <Translation>{(t) => <>{t(contents)}</>}</Translation>;
};

Meta.defaultProps = {
  title: TranslateContent("welcome_message"),
  description: "social media marketing website",
  keywords: "marketing, dubai marketing, social media dubai",
};

export default Meta;