import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import React, { useRef, useEffect } from "react";
import SplitFlapText from "../components/Machine/flaptext";
import FlyingPosters from "../components/Machine/flyposter";

const Machine = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const imageDivRef = useRef(null);
  const imgRef = useRef(null);
  const menuRef = useRef(null); 
  const climaxRef = useRef(null); 
  const flipRef = useRef(null); 

  const imgarray = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg"];
  const items = [
    "/Machine img/img1.png",
    "/Machine img/img2.png",
    "/Machine img/img3.png",
    "/Machine img/img4.png",
    "/Machine img/img5.png",
    "/Machine img/img6.png",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });

    // Image Pinning & Scroll Animation
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 14%",
        end: "top -240%",
        scrub: 2,
        pin: true,
        onUpdate: (elem) => {
          const imgindex = Math.min(Math.floor(elem.progress * imgarray.length), imgarray.length - 1);
          imgRef.current.src = imgarray[imgindex];
        },
      },
    });

    // Animate background color directly via GSAP, bypassing React state lag
    gsap.to("#smooth-content", {
      backgroundColor: "#000000",
      duration: 0.7,
      scrollTrigger: {
        trigger: menuRef.current,
        start: "bottom 30%",
        toggleActions: "play none none reverse", 
      },
    });

    // Slide Up Animation
    gsap.from(climaxRef.current, {
      scrollTrigger: {
        trigger: climaxRef.current,
        start: "top 60%", 
        toggleActions: "play none none reverse",
      },
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    //fliptext animation
    gsap.from(flipRef.current, {
      scrollTrigger: {
        trigger: flipRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      y: -500,
      opacity: 0,
      duration: 2,
      ease: "bounce.out",
    });
  }, []);

  return (
    <div id="smooth-wrapper" className="relative z-0 w-screen min-h-screen overflow-hidden bg-white">
      {/* Set static bg-white here since GSAP now controls the color transition directly */}
      <div
        id="smooth-content"
        className="bg-white min-h-screen w-screen flex flex-col overflow-x-hidden [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        <div
          ref={imageDivRef}
          className="stag absolute rounded-full top-[39vh] left-[11vw] h-[78vw] w-[78vw] lg:top-[7.4vh] lg:left-[38vw] lg:h-[22vw] lg:w-[22vw] overflow-hidden"
        >
          <img ref={imgRef} src={imgarray[0]} className="h-full w-full object-cover" />
        </div>
        <div className="relative">
          <div className="mt-[70vh] lg:mt-[55vh] w-full flex justify-center ">
            <h1 className="text-[28.5vw] lg:text-[20vw] text-black font-[font2] leading-[27vw] lg:leading-[17vw] uppercase text-center">
              Six-<br></br>Thirty<br></br>five
            </h1>
          </div>
          <div className="text-right mt-12 lg:mt-2 pr-5 lg:pr-19 lg:mb-2 lg:h-[45vw] overflow-x-hidden ">
            <p className="hidden lg:block text-black text-[3.5vw] font-semibold leading-[3.8vw] tracking-tighter">
              Our racing heritage <br />
              nourishes our <span className="text-red-800">performance</span> . We <br /> stay focused and say no to extra weight, <br /> cutting
              exactly 70 kilograms to craft agility. A true
              <br />
              sports car is <span className="text-blue-800">alive</span>. It has dynamics, a personality, a legacy
              <br />
              dating back to 1984. If we forget that, we can build quick
              <br />
              straight-line sedans, but we ruin them in corners. <br /> That's why we are committed to relentless <br />
              Engineering to forge absolute, <br /> untouchable legends.
            </p>
          </div>
          <div className="block lg:hidden text-center mt-4 p-8 overflow-x-hidden ">
            <p className=" text-black text-2xl font-semibold leading-[9vw] tracking-widest ">
              Our racing heritage nourishes our <span className="text-red-800">performance</span> . We stay focused and say no to extra weight,
              cutting exactly 70 kilograms to craft agility. A true sports car is <span className="text-blue-800">alive</span>. It has dynamics, a
              personality, a legacy dating back to 1984. If we forget that, we can build quick straight-line sedans, but we ruin them in corners.
              That's why we are committed to relentless Engineering to forge absolute, untouchable legends.
            </p>
          </div>
        </div>

        <div ref={menuRef} className="menu mx-50 flex justify-between mt-25 text-black">
          <span className="text-red-700 text-[2.5vw] font-[font1] text-center mt-23 px-15 font-light">X-Drive System</span>
          <div className="div font-light leading-13 mr-15 flex text-[2.5vw] flex-col">
            <span className="mask-t-from-20%">Aerodynamics</span>
            <span className="mask-t-from-20%">PowerTrain</span>
            <span className="mask-t-from-20%">Track Times</span>
            <span className="mask-t-from-20%">Chassis Dynamics</span>
          </div>
        </div>

        <div ref={climaxRef} className="climax mt-[23vh] flex">
          <div className="left w-1/2 " style={{ height: "850px" }}>
            <FlyingPosters items={items} planeWidth={605} planeHeight={600} distortion={0.9} scrollEase={0.11} cameraFov={65} cameraZ={20} />
          </div>
          <div className="right w-1/2 text-[1.5vw] p-20 font-[font1] text-white cursor-pointer flex flex-col justify-center">
            <p className="text-slate-400 font-light text-[1.1vw] leading-[2.2] tracking-wide">
              BMW <span className="text-white font-semibold tracking-widest uppercase">M5 CS F90</span> is a precision-engineered track weapon
              stripped of excess and built for pure adrenaline.
              <br />
              <br />
              At its core beats a monstrous <span className="text-white font-medium">4.4-liter twin-turbo V8</span> engine, unleashing a brutal{" "}
              <span className="text-white font-medium">627 horsepower</span> that catapults this super sedan from{" "}
              <span className="text-white font-medium">0 to 100 Kmph</span> in a blinding <span className="text-white font-medium">2.9 seconds</span>.
              <br />
              <br />
              It sheds dead weight through an aggressive carbon diet, utilizing{" "}
              <span className="text-white font-medium">Carbon Fiber Reinforced Plastic (CFRP)</span> to slash{" "}
              <span className="text-white font-medium">70 kg (154 lbs)</span> off its waistline.
              <br />
              <br />
              To harness this fury, a relentless <span className="text-white font-medium">M xDrive</span> system paired with an{" "}
              <span className="text-white font-medium">Active M Differential</span> guarantees maximum traction, with full switchability to{" "}
              <span className="text-white font-medium">2WD</span> for pure rear-wheel control.
              <br />
              <br />
              Beneath the surface, the <span className="text-white font-medium">CS-tuned suspension</span> dictates razor-sharp geometry with a lower
              stance and springs that are <span className="text-white font-medium">10% firmer</span>.
              <br />
              <br />
              Inside, the cockpit features hardcore <span className="text-white font-medium">M Carbon bucket seats</span>, while massive{" "}
              <span className="text-white font-medium">M Carbon Ceramic brakes</span> deliver relentless, fade-free stopping power.
            </p>
          </div>
        </div>

        <div ref={flipRef} className="fliptext ml-[14vw] mt-[40vh]">
          <SplitFlapText
            words={["LAUNCH CONTROL", "M MODE ACTIVE ", "627 HORSEPOWER"]}
            flipDuration={0.11}
            stagger={0}
            cycleDelay={2400}
            charset="alphanumeric"
            flipsPerChar={8}
            tileColor="#111827"
            textColor="#f8fafc"
            tileRadius={8}
            gap={15}
            fontSize={100}
            loop
            padTo={14}
          />
        </div>
      </div>
    </div>
  );
};

export default Machine;