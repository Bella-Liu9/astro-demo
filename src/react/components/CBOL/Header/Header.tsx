import * as React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import { Img } from "../../../uiux/Img";
import Logo from "./assets/logo_coming.svg";
import Twitter from "./assets/twitter_logo_navigation.svg";
interface TranslationItem {
  text: string;
  language: string;
}

interface logoProps {
  src: string;
  width: string;
  height: string;
}

interface routeListProps {
  name: string;
  path?: string;
  children?: {
    name: string;
    path: string;
  }[];
}

interface headerProps {
  logo?: logoProps;
  routeList?: routeListProps;
  transitionList?: TranslationItem[];
  background?: string;
  height?: string;
}

const Header = ({
  logo,
  routeList,
  transitionList,
  background = "transparent",
  height,
}: headerProps) => {
  return (
    <HeaderWrapper
      logo={logo}
      background={background}
      height={height}
      className="flex justify-between items-center"
    >
      {logo && (
        <Route exact path="/">
          <Img imgSource={logo.src} />
        </Route>
      )}
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.div<headerProps>`
  background: ${({ background }) => background};
  height: ${({ height }) => height};
  img {
    width: ${({ logo }) => logo?.width};
    height: ${({ logo }) => logo?.height};
  }
`;
export default Header;
