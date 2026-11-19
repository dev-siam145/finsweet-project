import { div, section } from "framer-motion/client";
import React from "react";
import Container from "../../common/Container";
import sad from "../../../assets/sad.png";
import Images from "../../ui/Images";
import reading from "../../../assets/reading.png";
import buri from "../../../assets/buri.png";
import { FaArrowRight } from "react-icons/fa6";

const Love = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col text-center uppercase mt-[128px] w-[1024px] mx-auto mb-[126px]">
          <p className="text-base font-robotoCondensed text-footerbg font-normal">
            sub headline
          </p>
          <h2 className="font-bold font-robotoCondensed text-footerbg text-5xl mt-[16px]">
            a church that's relevant
          </h2>
          <p className="mt-[32px] text-footerbg font-robotoCondensed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div>
            <button className="bg-primary py-6 px-16 rounded rounded-md uppercase font-normal text-[#1C1D28] mt-[80px] font-robotoCondensed">
              read more
            </button>
          </div>
          <div className="flex w-[1024px] h-[576px] gap-[24px] mx-auto">
            <div>
              <Images src={sad} />
            </div>
            <div className="mt-[48px]">
              <Images src={reading} />
            </div>
            <div>
              <Images src={buri} />
            </div>
          </div>
          <div className="w-[512px] h-[175px] mx-auto mt-[64px]">
            <p className="font-normal font-robotoCondensed">our mission & vision</p>
            <h2 className="text-footerbg text-[32px] font-bold mt-[16px]">celebrate WITH US</h2>
            <p className="w-512px h-[73px] mb-[16px] text-footerbg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center items-center font-robotoCondensed font-normal">
              <p>Read More</p>
              <p>
                <FaArrowRight />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Love;
