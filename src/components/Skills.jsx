import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import angular from "../assets/icon1.png";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import css from "../assets/cass.svg";
import { FaGitAlt } from "react-icons/fa";
import man from "../assets/angular.svg";
import vs from "../assets/vs.svg";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <section id="skills" className=" bg-neutral-900">
        <div className="max-w-container mx-auto">
          <h2 className=" text-lightgray text-[48px] leading-[26px] font-bold font-poppins text-center mb-[49px]">
            My Tech Stack
          </h2>
          <h3 className=" text-darkgray text-[32px] font-poppins font-normal leading-[26px] text-center">
            {" "}
            Technologies I’ve been working with recently
          </h3>
          <div className="allicon mt-[140px]">
            <div className=" grid grid-cols-12">
              <div className=" col-span-2">
                <FaHtml5 className=" text-[#33A9DC] text-[120px]" />
              </div>
              <div className=" col-span-2">
                <FaCss3Alt className="text-[#1572B6] text-[120px]" />
              </div>
              <div className=" col-span-2">
                <SiJavascript className="text-[#F5DE19] text-[110px]" />
              </div>
              <div className=" col-span-2">
                <FaReact className="text-[#00D8FF] text-[120px]" />
              </div>
              <div className=" col-span-2">
                <img src={angular} alt="" />
              </div>
              <div className=" col-span-2">
                <BsBootstrapFill className="text-[#563D7C] text-[120px]" />
              </div>
            </div>
            <div className=" grid grid-cols-12 mt-[78px]">
              <div className=" col-span-2">
                <SiTailwindcss className="text-[#44A8B3] text-[120px]" />
              </div>
              <div className=" col-span-2">
                <img src={css} alt="img" />
              </div>
              <div className=" col-span-2">
                <FaGitAlt className="text-[#DE4C36] text-[120px]" />
              </div>
              <div className=" col-span-2">
                <img src={man} alt="img" />
              </div>
              <div className=" col-span-2">
                <img src={vs} alt="" />
              </div>
              <div className=" col-span-2">
                <FaGithub className="text-[#FFFEFE] text-[120px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
