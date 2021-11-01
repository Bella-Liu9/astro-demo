import React from "react";
import styled from "styled-components";

/** line */
interface LineProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  paddingLR?: number;
  paddingTB?: number;
}
const LineWrapper = styled.div<LineProps>`
  display: inline-flex;
  width: ${({ width }) => `${width}vw`};
  height: ${({ height = 1 }) => `${height}px`};
  margin: ${({ paddingTB = 0, paddingLR = 0 }) =>
    `${paddingTB}vw ${paddingLR}vw`};
  background: ${({ color = "#ffffff" }) => `${color}`};
`;

export const Line = ({
  className,
  width,
  height,
  color,
  paddingLR,
  paddingTB,
}: LineProps) => {
  return (
    <LineWrapper
      width={width}
      height={height}
      color={color}
      className={className}
      paddingLR={paddingLR}
      paddingTB={paddingTB}
    />
  );
};
