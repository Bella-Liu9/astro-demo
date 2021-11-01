import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { Suspense } from "react";
import useSetting from "./utils/hooks/useSetting";
import CBOLPage from "./pages/CBOL";
import MBOLPage from "./pages/MBOL";

const getFont = (language: any) => {
  if (language?.split("zh")[0] === "") {
    return `font-family: "Georgia", serif;`;
  } else {
    return `font-family: "Linux Libertine", "Times", serif;`;
  }
};

const getLineHeight = (language: any) => {
  if (language?.split("en")[0] === "") {
    return "auto";
  } else {
    return "2.2vw";
  }
};

const I18nWrap = styled.div`
  height: 100%;
  * {
    ${(props: any) => getFont(props.language)}
  }
  .content,
  p {
    line-height: ${(props: any) => getLineHeight(props.language)};
  }
`;

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const { browserType } = useSetting();
  return (
    <div>
      <I18nWrap {...{ language }}>
        {/* <BrowserRouter>
          {browserType === "CBOL" && <CBOLPage />}
          {browserType === "MBOL" && <MBOLPage />}
        </BrowserRouter> */}
      </I18nWrap>
    </div>
  );
};

export default App;
{
  /* <I18nWrap {...{ language }}>
      <BrowserRouter>
        {browserType === "CBOL" && <CBOLPage />}
        {browserType === "MBOL" && <MBOLPage />}
      </BrowserRouter>
    </I18nWrap> */
}
