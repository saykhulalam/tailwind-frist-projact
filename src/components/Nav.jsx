import React from "react";
import logo from "../assets/logo.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <nav id="nav" className="pt-4 bg-neutral-900">
        <div className=" max-w-container mx-auto">
          <div className=" flex items-center justify-between">
            <img src={logo} alt="logo" />
            <div className="flex gap-[51px]">
              <ul className="flex gap-[50px] font-dm text-darkgray leading-[26px] text-[20px] font-medium">
                <li>Home</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
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
        </div>
      </nav>
    </>
  );
};

export default Nav;
