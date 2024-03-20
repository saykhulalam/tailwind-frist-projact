import React from "react";
import bannerimg from "../assets/banner.png";

const Banner = () => {
  return (
    <>
      <section id="banner" className=" bg-neutral-900 pt-[239px] pb-[350px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className=" col-span-8">
              <div className="text-areya">
                <h1 className=" text-hadinggray text-[58px] font-poppins font-bold leading-[70px]">
                  Hi 👋, <br /> My name is <br />{" "}
                  <span className="text-[#13B0F5]">Pavan MG</span> <br /> I
                  build things for web
                </h1>
              </div>
            </div>
            <div className=" col-span-4">
              <img src={bannerimg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
