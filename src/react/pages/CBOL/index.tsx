import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { Suspense } from "react";
import useSetting from "../../utils/hooks/useSetting";
import HomeCBOLPage from "./home";

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

const CBOLPage: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <Switch>
      {/* <Route exact path="/"></Route>
          <Route exact path="/"></Route>
          <Route exact path="/"></Route> */}
      <Route exact path="/">
        <HomeCBOLPage />
      </Route>
    </Switch>
  );
};

export default CBOLPage;
