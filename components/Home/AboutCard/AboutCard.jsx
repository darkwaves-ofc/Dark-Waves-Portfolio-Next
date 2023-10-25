import React from "react";
import { mainData } from "../../../data/data";
import "./AboutCard.css";
import dynamic from "next/dynamic";

const Fade = dynamic(() => import('react-reveal/Fade'), {
  ssr: false, // Disable server-side rendering
});

export default function AboutCard() {
  return (
    <div className="main__about_content g-5 m-auto">
      <Fade left>
        <div className="image__container position-relative">
          <img
            src={mainData.aboutPic}
            alt="About Dark Waves"
            className="about__image rounded-lg"
          />
          <img
            src={mainData.siteLogo}
            alt=""
            className="about__sub_logo position-absolute w-30 rounded-full"
          />
        </div>
      </Fade>
      <Fade right>
        <div className="content__container">
          <span className="title__intro text-primary font-bold">About Us</span>
          <h2 className="m-b-2">{mainData.aboutTitle}</h2>
          <span>{mainData.about}</span>
        </div>
      </Fade>
    </div>
  );
}
