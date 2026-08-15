import React from "react";
import Record from "../components/Records/record";
import IMG1 from "../../public/record1.png";
import IMG2 from "../../public/record2.jpg";
import IMG3 from "../../public/record3.jpg";
import IMG4 from "../../public/record4.png";
import IMG5 from "../../public/record5.jpg";
import IMG6 from "../../public/record6.png";
import IMG7 from "../../public/record7.png";
import IMG8 from "../../public/record8.jpg";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Threads from "../components/Records/bg";
import Antigravity from "../components/Records/bg";

const Records = () => {
  const data = [
    {
      img: [IMG1],
      text: (
        <>
          Nordschleife Lap Time <br /> 7:29.57{" "}
        </>
      ),
    },
    {
      img: [IMG7],
      text: (
        <>
          Lightning Lap
          <br />
          2:50.3{" "}
        </>
      ),
    },
    {
      img: [IMG3],
      text: (
        <>
          {" "}
          S63 Twin-Turbo V8
          <br /> 627 HP
        </>
      ),
    },
    {
      img: [IMG4],
      text: (
        <>
          {" "}
          Hockenheim GP
          <br /> 1:53.6
        </>
      ),
    },

    {
      img: [IMG2],
      text: (
        <>
          {" "}
          0-100 KMPH Sprint <br />
          2.6 SEC
        </>
      ),
    },
    {
      img: [IMG6],
      text: (
        <>
          V-Max Velocity
          <br />
          305 KMPH
        </>
      ),
    },
    {
      img: [IMG8],
      text: (
        <>
          {" "}
          MotoGP LEAD
          <br /> Safety Car 2021{" "}
        </>
      ),
    },
    {
      img: [IMG5],
      text: (
        <>
          Carbon Diet <br />
          154 LBS
        </>
      ),
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".stag", {
      y: 360,
      delay: 0.5,
      duration: 1.5,
    });

    gsap.from(".thin", {
      height: "17vh",
      scrollTrigger: {
        trigger: ".stag",
        scroller: "#main",

        start: "top 90%",
        end: "bottom 0%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="main" className="h-screen relative z-50 w-full overflow-y-auto overflow-x-hidden bg-white p-2">
      <div className="z-0 inset-0" style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Antigravity
          count={150}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <div className="pt-[32vh]">
        <h1 className="uppercase text-6xl lg:text-[12vw] text-black font-[font2]">Records</h1>
      </div>

      <div className=" stag w-full  flex flex-wrap mt-[-3.5vh]">
        {data.map(function (elem, index) {
          return (
            <div className="thin  lg:w-1/2 lg:h-[70vh] p-1 ">
              <Record key={index} image={elem.img} hoverText={elem.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Records;

//https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_124_1600x1200.jpg

//  y: 360,
//       delay:0.5,
//       duration: 1.5,

// height:0,
//     scrollTrigger:{
//       trigger:'.stag',
//       markers:true,
//       start:'top 65%',
//       end:'end -150%'
//     }
