import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/swiper.min.css";
const Swiper = () => {
  SwiperCore.use([EffectFade, Autoplay]);
  return (
    <SwiperComponent
      effect="fade"
      speed={1000}
      loop={true}
      autoplay={{
        // delay: 2000,
        delay: 10 * 1000,
      }}
    >
      <SwiperSlide style={{ background: "red" }}>
        <video
          id="heroparticlesvideo-0"
          poster="https://images.ctfassets.net/xit7f234flxz/2J7yShaHmHBq1Z0jsqAtK2/8606f6b69a8e9855a597423594db17ba/earth.jpg"
          controls={false}
          autoPlay
          loop
          playsInline
          preload="metadata"
          muted
          height="100%"
          width="100%"
        >
          <source
            src="https://singapore-chainx.oss-ap-southeast-1.aliyuncs.com/chainx.org/%E9%BB%91%E7%99%BD1.webm?versionId=CAEQDhiBgICF18.Z5hciIDI2MmZkYmRkNzZhYjQ0ZjRiMzczMjhlZTMyMjAyYWQ3"
            type="video/webm"
          />
          Your browser does not support video on HTML.
        </video>
      </SwiperSlide>
      <SwiperSlide style={{ background: "black" }}>
        <video
          id="heroparticlesvideo-0"
          poster="https://images.ctfassets.net/xit7f234flxz/2J7yShaHmHBq1Z0jsqAtK2/8606f6b69a8e9855a597423594db17ba/earth.jpg"
          controls={false}
          autoPlay
          loop
          playsInline
          preload="metadata"
          muted
          height="100%"
          width="100%"
        >
          <source
            src="https://singapore-chainx.oss-ap-southeast-1.aliyuncs.com/chainx.org/%E9%BB%91%E7%99%BD2.webm?versionId=CAEQDhiBgMDx1s.Z5hciIGNhMTA4YTBhN2IwZjQ5ODZhYzY3OGVlNWY0MTMxZTgy"
            type="video/webm"
          />
          Your browser does not support video on HTML.
        </video>
      </SwiperSlide>
    </SwiperComponent>
  );
};

export default Swiper;
