import React from "react";
import { ProjectsData } from "../../../data/data";
import "./Projects.css";
import { Fade } from "react-reveal";


export default function Projects() {
  return (
    <div className="projects m-t-8">
      <div className="title-container">
        <div className="title font-xl font-weight-700 m-b-4">
          Our Recent Projects
        </div>
      </div>
      <div className="projects-container g-8 flex-col">
        {ProjectsData.map((data, index) => (
          <div
            key={index}
            className={`project g-5 m-b-4 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <Fade cascade right={index % 2 !== 0} left={index % 2 === 0}>
              <a href={data.url} target="__blank" className="project-banner">
                <img src={data.banner} alt="" />
              </a>
            </Fade>
            <Fade cascade left={index % 2 !== 0} right={index % 2 === 0}>
              <div className="project-contant w-full flex-col-aro">
                <div className="project-title font-weight-700 font-lg">
                  {data.title}
                </div>
                <div className="project-des font-weight-500">{data.des}</div>
                <div className="project-usage flex-row-aro w-70">
                  {data.usage.map((usagedata, index) => (
                    <div className="item font-weight-600 font-md" key={index}>
                      {usagedata.title}
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}
