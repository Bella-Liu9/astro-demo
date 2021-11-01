import React from "react";
import styled from "styled-components";

/** Video */
interface VideoProps {
  placeHolder?: string;
  videoSource: videoSourceProps;
  className?: string;
}
interface videoSourceProps {
  source: string;
  type: string;
}
export const Video = ({ className, videoSource, placeHolder }: VideoProps) => {
  return (
    <video
      className={className}
      poster={placeHolder}
      controls={false}
      autoPlay
      loop
      playsInline
      preload="metadata"
      muted
      height="100%"
      width="100%"
    >
      <source src={videoSource.source} type={`video/${videoSource.type}`} />
      Your browser does not support video on HTML.
    </video>
  );
};
