import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import React from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [Active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center msx-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {" "}
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          <p className="text-white font-bold  cursor-pointer ">
            l Niraj<span className="sm:block ">  Yadav </span>
          </p>{" "}
        </Link>
        <ul className=" list-none hidden  sm:flex flex-row  gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                Active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden  flex flex-1 justify-end items-center"><img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>setToggle(!toggle)}/>

       <div className= {`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px]  z-10 rounded-xl`}>
       <ul className=" list-none  flex justify-start flex-col gap-4 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                Active === link.title ? "text-white" : "text-secondary"
              }font-popinst font-medium cursor-pointer text-[16px]  `}
              onClick={() => { setToggle(!toggle); setActive(link.title)}}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
       </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
