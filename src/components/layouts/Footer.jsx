import React from "react";
import Container from "../common/Container";
import footerlogo from "../../assets/footer-logo.png";
import Images from "../ui/Images";
import Anchor from "../ui/Anchor";

const Footer = () => {
  const companyInfo=[
    {
      id:1,
      title:"(480) 555-0103",

    },
    {
      id:2,
      title:"4517 Washington Ave. ",

    },
    {
      id:3,
      title:"finsweet@example.com",

    },
  ]
  const linkStyle="font-normal text-xs text-[#FFFFFF] font-robotoCondensed uppercase"


  return (
    <footer className="bg-footerbg py-16">
      <Container>
        <div className="flex justify-between">
          <div>
            <Anchor href="/">
              <Images src={footerlogo} alt="logo" />
            </Anchor>
            <div className="mt-4">
              <span className={linkStyle}>© Copyright Finsweet 2022</span>
            </div>
            <ul className=" mt-8 grid grid-cols-1 gap-4">
              {
                companyInfo.map((item)=>(

                  <li key={item.id} className={linkStyle}>{item.title}</li>
                ))
              }
            </ul>
          </div>
          <div className="w-[512px]">
            <h2 className="max-w-[377px] text-white font-bold text-[32px] leading-11 uppercase font-robotoCondensed">Subscribe to get Latest Updates and News</h2>

          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
