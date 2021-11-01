import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Header from "../../../components/CBOL/Header/Header";
import Swiper from "../../../lib/Swiper";
const HomeCBOLPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <Header
        background="#000"
        height="56px"
        logo={{
          src: "https://dapps.chainx.org/static/ChainX_logo.0c8ebb74.svg",
          width: "",
          height: "",
        }}
      />*/}
      <Swiper></Swiper> 
    </>
  );
};

export default HomeCBOLPage;
