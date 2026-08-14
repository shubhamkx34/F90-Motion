import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect, useState } from "react";
import SplitFlapText from "../components/Machine/flaptext";
import FlyingPosters from "../components/Machine/flyposter";


const Machine = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imgRef = useRef(null);
  const menuRef = useRef(null); //  Used to trigger the background change
  const climaxRef = useRef(null); // Replaces textRef for the first block
  const flipRef = useRef(null); // Replaces duplicate textRef for the bottom block

  const imgarray = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg"];
  const items = ["/Machine img/img1.png", "/Machine img/img2.png", "/Machine img/img3.png","/Machine img/img4.png","/Machine img/img5.png","/Machine img/img6.png"];

  // State for background color
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // 1. Image Pinning & Scroll Animation
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 14%",
        end: "top -230%",
        scrub: 2,
        pin: true,
        onUpdate: (elem) => {
          const imgindex = Math.min(Math.floor(elem.progress * imgarray.length), imgarray.length - 1);
          imgRef.current.src = imgarray[imgindex];
        },
      },
    });

    // 2. Background Color Change Trigger
    ScrollTrigger.create({
      trigger: menuRef.current,
      start: "bottom 30%",
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    });
    // 3. Slide Up Animation (Triggered AFTER background turns black)
    gsap.from(climaxRef.current, {
      scrollTrigger: {
        trigger: climaxRef.current,
        start: "top 60%", // Note: Change to "top 85%" if it triggers too late
        toggleActions: "play none none reverse",
      },
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  });

  return (
    <div
      className={`min-h-screen w-screen flex flex-col overflow-x-hidden [&::-webkit-scrollbar]:hidden [scrollbar-width:none] transition-colors duration-700 ${isScrolled ? "bg-black" : "bg-white"}`}
    >
      <div
        ref={imageDivRef}
        className="stag  absolute  rounded-full top-[39vh] left-[11vw] h-[78vw] w-[78vw] lg:top-[12vw] lg:left-[38vw] lg:h-[22vw] lg:w-[22vw] overflow-hidden  "
      >
        <img ref={imgRef} src={imgarray[0]} className="h-full w-full object-cover" />
      </div>
      <div className="relative">
        <div className="mt-[70vh] lg:mt-[55vh] w-full flex justify-center ">
          <h1 className="text-[28.5vw] lg:text-[20vw] text-black font-[font2] leading-[27vw] lg:leading-[17vw] uppercase text-center">
            Six-<br></br>Thirty<br></br>five
          </h1>
        </div>
        <div className="text-right   mt-12 lg:mt-2 pr-5 lg:pr-19 lg:mb-2 lg:h-[45vw] overflow-x-hidden ">
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
        <div className="block lg:hidden text-center  mt-4 p-8 overflow-x-hidden ">
          <p className=" text-black text-2xl font-semibold leading-[9vw]  tracking-widest  ">
            Our racing heritage nourishes our <span className="text-red-800">performance</span> . We stay focused and say no to extra weight, cutting
            exactly 70 kilograms to craft agility. A true sports car is <span className="text-blue-800">alive</span>. It has dynamics, a personality,
            a legacy dating back to 1984. If we forget that, we can build quick straight-line sedans, but we ruin them in corners. That's why we are
            committed to relentless Engineering to forge absolute, untouchable legends.
          </p>
        </div>
      </div>

      <div ref={menuRef} className="menu  mx-50 flex justify-between mt-25 text-black">
        <span className="text-red-700 text-[2.5vw] font-[font1] text-center mt-23 px-15 font-light">X-Drive System</span>
        <div className="div font-light leading-13 mr-15 flex  text-[2.5vw] flex-col">
          <span className="mask-t-from-20%">Aerodynamics</span>
          <span className="mask-t-from-20%">PowerTrain</span>
          <span className="mask-t-from-20%">Track Times</span>
          <span className="mask-t-from-20%">Chassis Dynamics</span>
        </div>
      </div>

      <div ref={climaxRef} className="climax mt-[23vh] flex">
        <div className="left w-1/2 " style={{ height: "850px" }}>
          <FlyingPosters items={items} planeWidth={610} planeHeight={600} distortion={0.6} scrollEase={0.11} cameraFov={65} cameraZ={20} />
        </div>
        <div className="right w-1/2 text-[1.5vw] p-20 font-[font1] text-white cursor-pointer">
          <p className="text-neutral-300 font-light text-[1.1vw] leading-[1.8] tracking-wide">
            BMW <span className="text-emerald-500 font-bold tracking-wider">M5 CS f90 </span> Model is a precision-engineered track weapon stripped of excess and
            built for pure adrenaline.
            <br />
            <br />
            At its core beats a monstrous <span className="text-white font-medium">4.4-liter twin-turbo V8</span> engine, unleashing a brutal
            <span className="text-red-500 font-bold">627 horsepower</span> that catapults this super sedan from
            <span className="text-white font-medium">0 to 60 mph</span> in a blinding <span className="text-blue-500 font-bold">2.9 seconds</span>.
            <br />
            <br />
            It sheds dead weight through an aggressive carbon diet, utilizing
            <span className="text-white font-medium">Carbon Fiber Reinforced Plastic (CFRP)</span> to slash
            <span className="text-amber-500 font-bold">70 kg (154 lbs)</span> off its waistline.
            <br />
            <br />
            To harness this fury, a relentless <span className="text-blue-400 font-medium">M xDrive</span> system paired with an
            <span className="text-blue-400 font-medium">Active M Differential</span> guarantees maximum traction, with full switchability to{" "}
            <span className="text-gray-500 font-bold">2WD</span> for pure rear-wheel control.
            <br />
            <br />
            Beneath the surface, the <span className="text-white font-medium">CS-tuned suspension</span> dictates razor-sharp geometry with a lower
            stance and springs that are <span className="text-amber-500 font-bold">10% firmer</span>.
            <br />
            <br />
            Inside, the cockpit features hardcore <span className="text-slate-500 font-medium">M Carbon bucket seats</span>, while massive <br/>
            <span className="text-red-500 font-medium">M Carbon Ceramic brakes</span> deliver relentless, fade-free stopping power.
          </p>
        </div>
      </div>

      <div className="fliptext ml-[15vw] mt-[30vh]">
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
  );
};

export default Machine;
