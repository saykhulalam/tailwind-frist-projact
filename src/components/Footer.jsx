import React from "react";
import logo2 from "../assets/logo2.svg";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section id="footer" className=" bg-neutral-900 pb-[66px]">
        <div className="max-w-container mx-auto">
          <div className=" flex items-center justify-between">
            <img src={logo2} alt="logo" />
            <div className="flex gap-[51px]">
              <div className="flex gap-[63px]">
                <h2 className=" text-lightgray font-normal text-[18px] font-dm leading-[26px]">
                  +91 12345 09876
                </h2>
                <h3 className=" text-lightgray font-normal text-[18px] font-dm leading-[26px]">
                  info@example.com
                </h3>
              </div>
              <div className="flex gap-[20px]">
                <div className="w-[30px] h-[30px] bg-lightgray flex items-center justify-center rounded-full text-[20px]">
                  <TbBrandGithubFilled />
                </div>
                <div className="w-[30px] h-[30px] bg-lightgray flex items-center justify-center rounded-full text-[20px]">
                  <BsTwitter />
                </div>
                <div className="w-[30px] h-[30px] bg-lightgray flex items-center justify-center rounded-full text-[20px]">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-[1px] bg-darkgray mt-[42px]"></div>
          <div className="flex justify-between mt-[53px]">
            <ul className="flex gap-[50px] font-dm text-darkgray leading-[26px] text-[20px] font-medium">
              <li>Home</li>
              <li>About</li>
              <li>Tech Stack</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
            <h3 className=" text-lightgray font-normal text-[18px] leading-[26px] font-poppins ">
              Designed and built by{" "}
              <span className="text-[#13B0F5]">Pavan MG</span> with{" "}
              <span className="text-[#13B0F5]">Love</span> &{" "}
              <span className="text-[#13B0F5]">Coffee</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
