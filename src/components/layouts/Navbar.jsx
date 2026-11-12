import React, { useState } from "react";
import Container from "../common/Container";
import logo from "../../assets/logo.png";
import Images from "../ui/Images";
import Anchor from "../ui/Anchor";
import { menuData } from "../../dummyData/menuData";
import { FaBars } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const handleSidebar = () => {
    setSidebarShow(true);
  };

  return (
    <>
      <nav className="bg-navbg py-3 md:py-5 lg:py-3 w-full overflow-x-hidden">
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
            <FaBars
              onClick={handleSidebar}
              className="text-white text-2xl cursor-pointer lg:hidden"
            />
          </div>
        </Container>
        <AnimatePresence>
          {sidebarShow && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-screen right-0 top-0 w-[300px] bg-black z-20 lg:hidden flex flex-col gap-8 p-6"
            >
              <button
                onClick={() => setSidebarShow(false)}
                className="self-end text-white"
              >
                Close
              </button>
              <ul className="flex flex-col gap-6">
                {menuData.map((item) => (
                  <li key={item.id}>
                    <Anchor
                      href={item.url}
                      onClick={() => setSidebarShow(false)}
                      className="font-normal text-base text-white uppercase font-robotoCondensed"
                    >
                      {item.label}
                    </Anchor>
                  </li>
                ))}
              </ul>
                <button className=" bg-primary px-8 xl:px-12 py-3 xl:py-5 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-robotoCondensed">
                Contact Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
