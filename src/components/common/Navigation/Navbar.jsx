import React, { useRef } from "react";
import F90 from "../../../assets/F-90.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import FullNav from "./FullNav";

const Navbar = () => {
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // // Check if we are on the Home page
  // const isHome = location.pathname == "/";
  // const isTelemetry = location.pathname == "/telemetry";
  // // Apply black on home, white on all other pages
  // const navBg = isHome || isTelemetry ? "bg-transparent" : "bg-white";

  return (
    <div className={"flex items-start justify-between lg:h-[4.5vw] h-11"}>
      <div className="h-full">
        <button
          className="cursor-pointer h-full"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="h-full pt-2" src={F90} alt="F-90 Logo" />
        </button>
      </div>

      <div
        onMouseEnter={() => {
          navRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navRef.current.style.height = "0%";
        }}
        className="h-11 w-[39vw] lg:h-11.5 lg:w-[16vw] relative"
      >
        <div className=" h-full w-full cursor-pointer bg-red-800">
          <div ref={navRef} className="h-0 w-full cursor-pointer transition-all absolute bg-blue-800">
            <button
              onClick={() => {
                navigate("/fullnav");
              }}
              className="w-full cursor-pointer pt-1 pl-14 pr-10  lg:pl-[6.5vw]"
            >
              <RiMenu4Fill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
