import React from "react";
import "./MainContent.css";
import { mainData } from "../../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-reveal";
import { useState } from "react";
import { useEffect } from "react";

export default function MainContent() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    // Initial check and add event listener for resizing
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!mobile ? (
        <div className="main-content flex-row-center">
          <Fade cascade left>
            <div className="details__section">
              <div className="title font-xl font-weight-700">
                {mainData.title}
              </div>
              <div className="description m-t-2">{mainData.description}</div>
              <div className="contact__icon flex-row-bet w-40 m-t-3 text-dark">
                {mainData.social_media.map((e, index) => (
                  <a href={e.link} title={e.name} key={index}>
                    <FontAwesomeIcon
                      className="font-md"
                      icon={`fa-brands fa-${e.icon}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="logo__section">
              <img
                src={mainData.logo}
                alt="Dark Waves Owner"
                className="logo__portfolio"
              />
            </div>
          </Fade>
        </div>
      ) : (
        <div className="main-content flex-col-center m-t-8">
          <Fade cascade left>
            <div className="details__section flex-col-center">
              <div className="title font-xl font-weight-700 text-center">
                {mainData.title}
              </div>
              <Fade right>
                <div className="logo__section">
                  <img
                    src={mainData.logo}
                    alt="Dark Waves Owner"
                    className="logo__portfolio"
                  />
                </div>
              </Fade>
              <div className="description m-t-2">{mainData.description}</div>
              <div className="contact__icon flex-row-aro w-full m-4 text-dark">
                {mainData.social_media.map((e, index) => (
                  <a href={e.link} title={e.name} key={index}>
                    <FontAwesomeIcon
                      className="font-md"
                      icon={`fa-brands fa-${e.icon}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
}
