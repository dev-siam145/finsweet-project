import React, { Children } from "react";
import Container from "../common/Container";
import logo from "../../assets/logo.png";
import Images from "../ui/Images";
import Anchor from "../ui/Anchor";
import { menuData } from "../../dummyData/menuData";
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="bg-navbg py-3 md:py-5 lg:py-3">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-32">
            <Anchor
              href="/"
              className="relative after:absolute after:content-[''] after:w-0.5 after:bg-white/10 after:h-20 after:-right-16 after:-bottom-6"
            >
              <Images src={logo} alt="not found" />
            </Anchor>
            <ul className="hidden lg:flex items-center gap-4">
              {menuData.map((item, index) => (
                <li key={index}>
                  <Anchor
                    href={item.url}
                    className="font-normal text-base text-white uppercase font-robotoCondensed"
                  >
                    {item.label}
                  </Anchor>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="hidden lg:block bg-primary px-8 xl:px-12 py-3 xl:py-5 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-robotoCondensed">
              Contact Us
            </button>
            
          </div>
          <FaBars className='text-white text-2xl cursor-pointer lg:hidden' />
      
        </div>
      </Container>
    
    </nav>
  );
};

export default Navbar;
