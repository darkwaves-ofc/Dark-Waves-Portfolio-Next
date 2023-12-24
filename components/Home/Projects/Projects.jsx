import React, { useEffect, useState } from "react";
import "./Projects.css";
import Image from "next/image";
import { ProjectsData, commonData } from "../../../data/data";
import dynamic from "next/dynamic";
const Fade = dynamic(() => import("react-reveal/Fade"), {
  ssr: false,
});

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= commonData.responsive.tablet + 200);
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
    <div className="projects m-t-8">
      <div className="title-container">
        <div
          className={`title font-xl font-weight-700 m-b-4 ${
            isMobile ? "text-center" : ""
          }`}
        >
          Our Recent Projects
        </div>
      </div>
      <div className="projects-container g-8 flex-col">
        {ProjectsData.map((data, index) => (
          <div
            key={index}
            className={`project g-5 m-b-4 ${
              !isMobile && index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } ${isMobile ? "m-auto" : ""}`}
          >
            {!isMobile ? (
              <>
                <Fade cascade right={index % 2 !== 0} left={index % 2 === 0}>
                  <a
                    href={data.url}
                    target="_blank" /* Changed "__blank" to "_blank" */
                    className="project-banner"
                  >
                    <Image src={data.banner} width={500} height={500} alt="" />
                  </a>
                </Fade>
                <Fade cascade left={index % 2 !== 0} right={index % 2 === 0}>
                  <div className="project-content w-full flex-col-aro">
                    <div className="project-title font-weight-700 font-lg">
                      {data.title}
                    </div>
                    <div className="project-des font-weight-500">
                      {data.des}
                    </div>
                    <div className="project-usage flex-row-aro w-70">
                      {data.usage.map((usagedata, usageIndex) => (
                        <div
                          className="item font-weight-600 font-md"
                          key={usageIndex}
                        >
                          {usagedata.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </Fade>
              </>
            ) : (
              <>
                <Fade bottom>
                  <div className="position-relative mobile-project-card rounded-top">
                    <a
                      href={data.url}
                      target="_blank" /* Changed "__blank" to "_blank" */
                      className="h-100"
                    >
                      <Image
                        src={data.banner}
                        width={500}
                        height={300}
                        alt={data.title}
                      />
                    </a>
                    <div className="project-content w-full flex-col-aro h-70 position-absolute ">
                      <a
                        className="project-title font-weight-700 font-lg"
                        href={data.url}
                        target="_blank" /* Changed "__blank" to "_blank" */
                      >
                       {data.title}
                      </a>
                      <div className="project-des font-weight-500">
                        {data.des}
                      </div>
                      <div className="project-usage flex-row-aro w-70">
                        {data.usage.map((usagedata, usageIndex) => (
                          <div
                            className="item font-weight-600 font-md"
                            key={usageIndex}
                          >
                            {usagedata.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Fade>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
