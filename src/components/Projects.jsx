import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <section id="project" className=" bg-neutral-900 pt-[214px] pb-[219px]">
        <div className="max-w-container mx-auto">
          <h2 className=" text-lightgray font-bold text-[48px] leading-[26px] font-poppins text-center">
            Projects
          </h2>
          <h4 className=" text-darkgray font-normal text-[32px] font-poppins leading-[26px] mt-[49px] text-center">
            Things I’ve built so far
          </h4>
          <div className=" grid grid-cols-12 mt-[99px]">
            <div className=" col-span-4">
              <div className="w-[373px] h-[567px">
                <img src={card1} alt="img" />
                <div className=" pt-[27px] pr-[31px] pb-[25px] pl-[28px] bg-[#363636] rounded-b-[20px]">
                  <h2 className=" text-lightgray font-medium leading-[26px] text-[28px] mb-[17px] font-poppins">
                    Project Tile goes here
                  </h2>
                  <p className=" text-lightgray font-poppins font-light leading-[26px] text-[18px] mb-[12px]">
                    This is sample project description random things are here in
                    description This is sample project lorem ipsum generator for
                    dummy content
                  </p>
                  <h5 className=" text-lightgray font-poppins leading-[26px] text-[16px] font-normal mb-[21px]">
                    Tech stack : HTML , JavaScript, SASS, React
                  </h5>
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] items-center">
                      <FaLink className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        Live Preview
                      </h3>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <FaGithub className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        View Code
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[373px] h-[567px">
                <img src={card2} alt="img" />
                <div className=" pt-[27px] pr-[31px] pb-[25px] pl-[28px] bg-[#363636] rounded-b-[20px]">
                  <h2 className=" text-lightgray font-medium leading-[26px] text-[28px] mb-[17px] font-poppins">
                    Project Tile goes here
                  </h2>
                  <p className=" text-lightgray font-poppins font-light leading-[26px] text-[18px] mb-[12px]">
                    This is sample project description random things are here in
                    description This is sample project lorem ipsum generator for
                    dummy content
                  </p>
                  <h5 className=" text-lightgray font-poppins leading-[26px] text-[16px] font-normal mb-[21px]">
                    Tech stack : HTML , JavaScript, SASS, React
                  </h5>
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] items-center">
                      <FaLink className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        Live Preview
                      </h3>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <FaGithub className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        View Code
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[373px] h-[567px">
                <img src={card3} alt="img" />
                <div className=" pt-[27px] pr-[31px] pb-[25px] pl-[28px] bg-[#363636] rounded-b-[20px]">
                  <h2 className=" text-lightgray font-medium leading-[26px] text-[28px] mb-[17px] font-poppins">
                    Project Tile goes here
                  </h2>
                  <p className=" text-lightgray font-poppins font-light leading-[26px] text-[18px] mb-[12px]">
                    This is sample project description random things are here in
                    description This is sample project lorem ipsum generator for
                    dummy content
                  </p>
                  <h5 className=" text-lightgray font-poppins leading-[26px] text-[16px] font-normal mb-[21px]">
                    Tech stack : HTML , JavaScript, SASS, React
                  </h5>
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] items-center">
                      <FaLink className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        Live Preview
                      </h3>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <FaGithub className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        View Code
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-12 mt-[65px]">
            <div className=" col-span-4">
              <div className="w-[373px] h-[567px">
                <img src={card4} alt="img" />
                <div className=" pt-[27px] pr-[31px] pb-[25px] pl-[28px] bg-[#363636] rounded-b-[20px]">
                  <h2 className=" text-lightgray font-medium leading-[26px] text-[28px] mb-[17px] font-poppins">
                    Project Tile goes here
                  </h2>
                  <p className=" text-lightgray font-poppins font-light leading-[26px] text-[18px] mb-[12px]">
                    This is sample project description random things are here in
                    description This is sample project lorem ipsum generator for
                    dummy content
                  </p>
                  <h5 className=" text-lightgray font-poppins leading-[26px] text-[16px] font-normal mb-[21px]">
                    Tech stack : HTML , JavaScript, SASS, React
                  </h5>
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] items-center">
                      <FaLink className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        Live Preview
                      </h3>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <FaGithub className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        View Code
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[373px] h-[567px">
                <img src={card5} alt="img" />
                <div className=" pt-[27px] pr-[31px] pb-[25px] pl-[28px] bg-[#363636] rounded-b-[20px]">
                  <h2 className=" text-lightgray font-medium leading-[26px] text-[28px] mb-[17px] font-poppins">
                    Project Tile goes here
                  </h2>
                  <p className=" text-lightgray font-poppins font-light leading-[26px] text-[18px] mb-[12px]">
                    This is sample project description random things are here in
                    description This is sample project lorem ipsum generator for
                    dummy content
                  </p>
                  <h5 className=" text-lightgray font-poppins leading-[26px] text-[16px] font-normal mb-[21px]">
                    Tech stack : HTML , JavaScript, SASS, React
                  </h5>
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] items-center">
                      <FaLink className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        Live Preview
                      </h3>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <FaGithub className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        View Code
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[373px] h-[567px">
                <img src={card6} alt="img" />
                <div className=" pt-[27px] pr-[31px] pb-[25px] pl-[28px] bg-[#363636] rounded-b-[20px]">
                  <h2 className=" text-lightgray font-medium leading-[26px] text-[28px] mb-[17px] font-poppins">
                    Project Tile goes here
                  </h2>
                  <p className=" text-lightgray font-poppins font-light leading-[26px] text-[18px] mb-[12px]">
                    This is sample project description random things are here in
                    description This is sample project lorem ipsum generator for
                    dummy content
                  </p>
                  <h5 className=" text-lightgray font-poppins leading-[26px] text-[16px] font-normal mb-[21px]">
                    Tech stack : HTML , JavaScript, SASS, React
                  </h5>
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] items-center">
                      <FaLink className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        Live Preview
                      </h3>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <FaGithub className="text-[20px] text-white" />
                      <h3 className="text-[16px] leading-[26px] font-normal text-white">
                        View Code
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
