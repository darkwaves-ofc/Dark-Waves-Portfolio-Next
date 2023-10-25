import React from "react";
import "./Skills.css";
import { SkillsData } from "../../../data/data";
import dynamic from "next/dynamic";

const Fade = dynamic(() => import('react-reveal/Fade'), {
  ssr: false, // Disable server-side rendering
});

export default function Skills() {
  return (
    <div className="Skills_content flex-col-center m-b-8 m-auto">
      <Fade top>
        <div className="title_container m-b-4">
          <div className="title font-xl font-weight-700">
            My Own Skills With Programing
          </div>
        </div>
      </Fade>
      <div className="content w-full">
        {SkillsData.map((data, index) => (
          <Fade right={index % 2 !== 0} left={index % 2 === 0} key={index}>
            <div key={index} className="skill flex-col-bet m-4">
              <div className="skill_title font-lg font-weight-600 m-4">
                {data.title}
              </div>
              <div className="content flex-row-eve w-full">
                {data.content.map((data, index) => (
                  <Fade left={index % 2 !== 0} right={index % 2 === 0} key={index}>
                    <div key={index} className="skill_card flex-row-center">
                      <div className="logo">
                        <img src={data.logo} width={50} alt={data.title} />
                      </div>
                      <div className="card_title m-2 font-md font-weight-600">
                        {data.title}
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
