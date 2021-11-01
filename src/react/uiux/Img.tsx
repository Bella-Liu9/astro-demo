import React from "react";
import styled from "styled-components";

/** img */
interface ImgProps {
  imgSource: string;
  className?: string;
  // onClick?: React.MouseEventHandler<Element>;
  onClick?: React.MouseEventHandler<Element>;
}

export const Img = ({ className, onClick, imgSource }: ImgProps) => {
  return <img src={imgSource} alt="" className={className} onClick={onClick} />;
};
