import React from "react";

import Container from "../../common/Container";
import aboutImg from "../../../assets/about.png";
import Images from "../../ui/Images";
import involvedbg from "../../../assets/involved.png"
import back from "../../../assets/back.png"

const Relevents = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col text-center uppercase mt-[128px]">
          <p className="text-base font-robotoCondensed text-footerbg font-normal">
            sub headline
          </p>
          <h2 className="font-bold font-robotoCondensed text-footerbg text-5xl">
            a church that's relevant
          </h2>
        </div>
        <div className="flex gap-[24px] mt-[64px]">
          <div className="w-[411px] h-[380px] bg-releventbg px-[80px] py-[80px] relative">
            <Images src={aboutImg} />
            <div className="w-[251px] h-[148px] font-robotoCondensed">
              <h2 className="text-[44px] uppercase font-bold">about us</h2>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-[411px] h-[16px] bg-primary absolute left-0 bottom-0 "></div>
          </div>
          <div className="w-[411px] h-[380px] bg-releventbg px-[80px] py-[80px] relative">
            <Images src={involvedbg} />
            <div className="w-[251px] h-[148px] font-robotoCondensed">
              <h2 className="text-[42px] uppercase font-bold">get involved</h2>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-[411px] h-[16px] bg-primary absolute left-0 bottom-0 "></div>
          </div>
          <div className="w-[411px] h-[380px] bg-releventbg px-[80px] py-[80px] relative">
            <Images src={back} />
            <div className="w-[251px] h-[148px] font-robotoCondensed">
              <h2 className="text-[44px] uppercase font-bold">Giving back</h2>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-[411px] h-[16px] bg-primary absolute left-0 bottom-0 "></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Relevents;
