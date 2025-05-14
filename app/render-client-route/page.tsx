"use client";

import React, { useContext } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useTheme } from "@/components/theme-provider";
import { ThemeContext } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";
export default function ClientRoutePage() {
  const theme = useContext(ThemeContext);
  const result=clientSideFunction();
  // const settings = {
  //   dots: true,
  // };
console.log("client")
   
      {/* <ImageSlider /> */}
  return (
    <div style={{ color: theme.colors.primary }}>
      <h1>Client route page {result}</h1>
    </div>
    // <div className="image-slider-container">
    //   <Slider {...settings}>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //   </Slider>
    // </div>
  );
}
