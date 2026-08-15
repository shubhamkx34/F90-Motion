import React, { useRef } from "react";
import Img1 from "./NavbarAssets/img1.jpg";
import Img2 from "./NavbarAssets/img2.jpg";
import Img3 from "./NavbarAssets/img3.jpg";
import Img4 from "./NavbarAssets/img4.jpg";
import Img5 from "./NavbarAssets/img5.jpg";
import Img6 from "./NavbarAssets/img6.jpg";
import { RiCloseLargeLine } from "react-icons/ri";
import F90 from "../../../assets/F-90.svg";
import gsap from "gsap/all";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";

const FullNav = () => {
  const navRef = useRef([]);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    if (navRef.current[index]) {
      navRef.current[index].style.height = "100%";
    }
  };
  const handleMouseLeave = (index) => {
    if (navRef.current[index]) {
      navRef.current[index].style.height = "0%";
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".link", {
      rotateY: -360,
      duration: 0.7,
    });
  });

  return (
    <div className="fullnav fixed inset-0 z-50 min-h-screen w-full bg-black">
      <div>
        <div className="flex justify-between">
          <div className="lg:h-[4.5vw] lg:w-[12vw] h-11">
            <button className="cursor-pointer h-full" onClick={() => navigate("/")}>
              <img className="h-full pt-2" src={F90} alt="F-90 Logo" />
            </button>
          </div>
          <div className="lg:w-[8.8vw] lg:h-[9vw] lg:ml-[2vw]  lg:p-0 p-3">
            <button className="cursor-pointer">
              <RiCloseLargeLine
                onClick={() => {
                  navigate(-1);
                }}
                className="text-[13vw] lg:text-[9vw] text-zinc-500 hover:text-white"
              />
            </button>
          </div>
        </div>
        <div className="lg:mt-[5vw] mt-[50vw] flex flex-col">
          <div
            onClick={() => {
              navigate("/records");
            }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
            className="link cursor-pointer relative h-full w-full bg-black text-zinc-500 "
          >
            <h1 className="font-extrabold font-[font2] text-[12vw] lg:text-[7vw] text-center  border-y">TRACK RECORDS</h1>

            <div
              ref={(el) => (navRef.current[0] = el)}
              className=" flex absolute bg-blue-950 text-white h-0 top-0 w-full overflow-hidden items-center transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] [&::-webkit-scrollbar]:hidden  "
            >
              <div className="moveX flex  items-center w-max h-full">
                <h2 className="shrink-0 px-4 whitespace-nowrap font-extrabold font-[font2] text-[8vw] lg:text-[7vw]">PURE DOMINANCE</h2>
                <img className="shrink-0 mx-4 h-[20vw] w-[40vw] lg:w-[19vw]  lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img2} alt="" />
                <h2 className="shrink-0 px-4 whitespace-nowrap font-extrabold font-[font2] text-[8vw] lg:text-[7vw]">PURE DOMINANCE</h2>
                <img className="shrink-0 mx-4 h-[20vw] w-[40vw] lg:w-[19vw]  lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img1} alt="" />
                <h2 className="shrink-0 px-4 whitespace-nowrap font-extrabold font-[font2] text-[8vw] lg:text-[7vw]">PURE DOMINANCE</h2>
                <img className="shrink-0 mx-4 h-[20vw] w-[40vw] lg:w-[19vw]  lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img2} alt="" />
                <h2 className="shrink-0 px-4 whitespace-nowrap font-extrabold font-[font2] text-[8vw] lg:text-[7vw]">PURE DOMINANCE</h2>
                <img className="shrink-0 mx-4 h-[20vw] w-[40vw] lg:w-[19vw]  lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img1} alt="" />
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              navigate("/machine");
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            className="link cursor-pointer relative lg:h-full lg:w-full bg-black text-zinc-500 lg:py-0 py-5"
          >
            <h1 className="font-extrabold font-[font2] text-[12vw] lg:text-[7vw] text-center lg:py-0 py-5 border-y">MACHINE</h1>

            <div
              ref={(el) => (navRef.current[1] = el)}
              className=" flex absolute bg-red-950 text-white h-0 top-0 w-full overflow-hidden items-center transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] [&::-webkit-scrollbar]:hidden "
            >
              <div className="moveX flex items-center w-max h-full">
                <h2 className="whitespace-nowrap font-extrabold font-[font2] text-[9vw] lg:text-[7vw]">INSIDE THE BEAST</h2>
                <img className="shrink-0 mx-4 h-[30vw] w-[50vw] lg:w-[19vw] lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img3} alt="" />
                <h2 className="whitespace-nowrap font-extrabold font-[font2] text-[9vw] lg:text-[7vw]">INSIDE THE BEAST</h2>
                <img className="shrink-0 mx-4 h-[30vw] w-[50vw] lg:w-[19vw] lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img4} alt="" />
                <h2 className="whitespace-nowrap font-extrabold font-[font2] text-[9vw] lg:text-[7vw]">INSIDE THE BEAST</h2>
                <img className="shrink-0 mx-4 h-[30vw] w-[50vw] lg:w-[19vw] lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img3} alt="" />
                <h2 className="whitespace-nowrap font-extrabold font-[font2] text-[9vw] lg:text-[7vw]">INSIDE THE BEAST</h2>
                <img className="shrink-0 mx-4 h-[30vw] w-[50vw] lg:w-[19vw] lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img4} alt="" />
              </div>
            </div>
          </div>

          <div
          div
            onClick={() => {
              navigate("/telemetry");
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            className="link cursor-pointer relative h-full w-full  bg-black text-zinc-500"
          >
            <h1 className="font-extrabold font-[font2] text-[12vw] lg:text-[7vw] text-center lg:py-0 py-5  border-y">TELEMETRY</h1>

            <div
              ref={(el) => (navRef.current[2] = el)}
              className=" flex absolute bg-slate-900 text-white h-0 top-0 w-full overflow-hidden items-center transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] [&::-webkit-scrollbar]:hidden "
            >
              <div className="moveX flex items-center w-max h-full">
                <h2 className="whitespace-nowrap font-extrabold font-[font2] text-[8vw] lg:text-[7vw]">READ THE PULSE</h2>
                <img className="shrink-0 mx-4 h-[20vw] w-[40vw] lg:w-[19vw] lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img5} alt="" />
                <h2 className="whitespace-nowrap font-extrabold font-[font2] text-[8vw] lg:text-[7vw]">READ THE PULSE</h2>
                <img className="shrink-0 mx-4 h-[20vw] w-[40vw] lg:w-[19vw] lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img6} alt="" />
                <h2 className="whitespace-nowrap font-extrabold font-[font2] text-[8vw] lg:text-[7vw]">READ THE PULSE</h2>
                <img className="shrink-0 mx-4 h-[20vw] w-[40vw] lg:w-[19vw] lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img5} alt="" />
                <h2 className="whitespace-nowrap font-extrabold font-[font2] text-[8vw] lg:text-[7vw]">READ THE PULSE</h2>
                <img className="shrink-0 mx-4 h-[20vw] w-[40vw] lg:w-[19vw] lg:h-[7vw] rounded-full object-cover overflow-hidden" src={Img6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default FullNav;
