import React from "react";
import bannerImg from "../../../assets/banner.jpg";
import Container from "../../common/Container";

const Banner = () => {
  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <p className="text-white font-bold text-base uppercase font-robotoCondensed pt-32">
            Welcome to our CHURCH
          </p>
          <h1 className="text-white font-bold text-[64px] w-[592px] font-robotoCondensed uppercase">
            Become a part of our community
          </h1>
          <button className="bg-primary py-6 px-16 rounded rounded-md uppercase font-normal text-[#1C1D28]">
            learn more
          </button>
          <div className="flex items-center gap-3 mt-16 w-84.5 h-12 text-white font-robotoCondensed">
            <span className="w-4.5 h-[1px] bg-primary mt-[-20px]"></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          </div>
        
        </Container>
      </div>
    </>
  );
};

export default Banner;
