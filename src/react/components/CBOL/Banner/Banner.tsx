import * as React from "react";
import styled from "styled-components";
import Title from "./assets/title_home.svg";
import TitleMbol from "./assets/title_home_Mbol.svg";
import TextureImg from "./assets/img_Texture.svg";
import GreenArrow from "./assets/icon_arrow_green.svg";
import BlackArrow from "./assets/icon_arrow_black.svg";
import LightArrow from "./assets/icon_arrow_light.svg";
import MbolBG from "./assets/img_BG.svg";
import Circle from "./assets/home_round.svg";
import Sector from "./assets/home_sector.svg";
import Triangle from "./assets/home_triangle.svg";

const Wrap = styled.section`
  width: 100%;
  height: 851px;
  position: relative;
  background: #0e1937;
  overflow: hidden;
  @media screen and (max-width: 769px) {
    width: 101vw;
    left: -0.5vw;
    height: 114.667vw;
    background: url(${MbolBG});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Texture = styled.div`
  display: flex;
  width: 562px;
  height: 566px;
  transform: translate(-50%, 0);
  position: absolute;
  left: 50%;
  top: 684px;
  div {
    width: 562px;
    height: 566px;
    background: url(${TextureImg});
    background-size: cover;
    animation: round 12s infinite;
    animation-timing-function: ease-in-out;
  }
  @media screen and (max-width: 769px) {
    display: none;
  }
`;
const CircleBox = styled.div`
  position: absolute;
  top: 146px;
  right: -48px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;
const SectorBox = styled.div`
  position: absolute;
  top: -176px;
  right: 226px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;
const TriangleBox = styled.div`
  position: absolute;
  top: 146px;
  left: -92px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 851px;
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0;
  }
  h1 {
    margin: 0;
    width: 1204.01px;
    height: 223.07px;
    background: url(${Title});
    background-size: cover;
    position: relative;
    @media screen and (max-width: 769px) {
      width: 72vw;
      height: 15.333vw;
      background: url(${TitleMbol});
      background-size: cover;
      position: relative;
    }
  }
  p {
    width: 660px;
    height: 18px;
    line-height: 18px;
    margin: 40px 0px 44px;
    font-family: "Optimistic Text", sans-serif;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 0.14px;
    font-weight: 400;
    @media screen and (max-width: 769px) {
      width: 78.533vw;
      height: auto;
      opacity: 0.5;
      font-size: 3.733vw;
      color: #ffffff;
      letter-spacing: 0.033vw;
      line-height: 5.333vw;
      text-align: center;
      font-weight: 400;
      position: relative;
      left: -2.86vw;
      margin: 5.867vw 0px;
    }
  }
  .link {
    display: flex;
    justify-content: space-between;
    slign-items: center;
    width: 260px;
    .text {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-family: "Optimistic Display", "NotoSans", "NotoSansJP", "NotoSansKR",
        sans-serif;
      font-size: 20px;
      color: #19c184;
      font-weight: 700;
    }
    .arrow {
      display: inline-flex;
      width: 46.5px;
      height: 46.5px;
      border: 2px solid #19c184;
      border-radius: 50%;
      background: url(${GreenArrow}) no-repeat center center;
      &:hover {
        width: 46.5px;
        height: 46.5px;
        background: #e9e9e9;
        border: 2px solid #0e1937;
        border-radius: 50%;
        background-image: url(${BlackArrow});
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
    @media screen and (max-width: 769px) {
      display: none;
    }
  }
  .linkMbol {
    display: none;
    @media screen and (max-width: 769px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26vw;
      height: 11.733vw;
      border: 1px solid #ffffff;
      border-radius: 5.867vw;
      font-family: "Optimistic Display", "NotoSans", "NotoSansJP", "NotoSansKR",
        sans-serif;
      .text {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 3.2vwvw;
        color: #ffffff;
        letter-spacing: 0.24vw;
        margin-right: 1vw;
        line-height: 24px;
        font-weight: 700;
      }
      .arrow {
        display: inline-flex;
        width: 4.8vw;
        height: 4.8vw;
        background: url(${LightArrow});
        background-size: cover;
      }
    }
  }
`;

type BannerProps = {};
const Banner: React.FC<BannerProps> = () => {
  return (
    <Wrap>
      <Texture>
        <div></div>
      </Texture>
      <Wrapper>
        <h1>
          <CircleBox className="circle">
            <img src={Circle} alt="" />
          </CircleBox>
          <SectorBox className="sector">
            <img src={Sector} alt="" />
          </SectorBox>
          <TriangleBox className="triangle">
            <img src={Triangle} alt="" />
          </TriangleBox>
        </h1>
        <p>
          Coming is an encrypted messaging app with digital asset transfer
          function.
        </p>
        <a className="link" href="./download/">
          <span className="text">Get Coming for Free</span>
          <span className="arrow"></span>
        </a>
        <a className="linkMbol" href="./download/">
          <span className="text">Get</span>
          <span className="arrow"></span>
        </a>
      </Wrapper>
    </Wrap>
  );
};

export default Banner;
