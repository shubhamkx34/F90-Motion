import DarkVeil from "../components/Telemetry/bg";
import TargetCursor from "../components/Telemetry/targetCursor";
import { useState } from "react";

const telemetryData = {
  EFFICIENT: {
    bgHue: 150,
    bgSpeed: 0.5,
    oilTemp: { value: "95°C", color: "text-emerald-500", bar: "bg-emerald-500 w-[45%]" },
    boost: { value: "0.4 BAR", color: "text-emerald-500", bar: "bg-emerald-500 w-[20%]" },
    coolant: { value: "85°C", color: "text-emerald-500", bar: "bg-emerald-500 w-[40%]" },
    trans: { value: "80°C", color: "text-emerald-500", bar: "bg-emerald-500 w-[35%]" },
    gForce: {
      lateral: "0.00 G",
      longitudinal: "0.00 G",
      dotPos: "top-[48%] left-[48.3%]  ",
      dotColor: "border-emerald-500 bg-emerald-500 shadow-[0_0_15px_#10b981]",
      textColor: "text-emerald-500",
    },
  },
  SPORT: {
    bgHue: -145,
    bgSpeed: 0.8,
    oilTemp: { value: "105°C", color: "text-orange-500", bar: "bg-orange-500 w-[75%]" },
    boost: { value: "1.2 BAR", color: "text-orange-500", bar: "bg-orange-500 w-[65%]" },
    coolant: { value: "95°C", color: "text-orange-500", bar: "bg-orange-500 w-[60%]" },
    trans: { value: "92°C", color: "text-orange-500", bar: "bg-orange-500 w-[65%]" },
    gForce: {
      lateral: "0.85 G",
      longitudinal: "0.65 G",
      dotPos: "top-[65%] left-[65%]",
      dotColor: "border-orange-500 bg-orange-500 shadow-[0_0_15px_#f59e0b]",
      textColor: "text-orange-500",
    },
  },
  TRACK: {
    bgHue: -125,
    bgSpeed: 1.5,
    oilTemp: { value: "115°C", color: "text-red-500", bar: "bg-red-500 w-[95%] " },
    boost: { value: "1.8 BAR", color: "text-red-500", bar: "bg-red-500 w-[98%] " },
    coolant: { value: "105°C", color: "text-red-500", bar: "bg-red-500 w-[85%]" },
    trans: { value: "102°C", color: "text-red-500", bar: "bg-red-500 w-[90%]" },
    gForce: {
      lateral: "1.15 G",
      longitudinal: "0.85 G",
      dotPos: "top-[75%] left-[80%]",
      dotColor: "border-red-500 bg-red-500 shadow-[0_0_15px_orange]",
      textColor: "text-red-500",
    },
  },
};

const Telemetry = () => {
  const [activeMode, setactiveMode] = useState("EFFICIENT");
  const currentData = telemetryData[activeMode];

  return (
    <div className="w-screen h-screen relative bg-black text-white">
      <div className="z-0 inset-0" style={{ width: "100%", height: "100%", position: "absolute" }}>
        <DarkVeil
          hueShift={currentData.bgHue}
          speed={currentData.bgSpeed}
          noiseIntensity={0}
          scanlineIntensity={1}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>

      <div className="text-white z-30 relative pt-16 flex flex-col  ">
        <div className="herotext flex text-center flex-col leading-snug tracking-widest">
          <h1 className=" text-[2.5vw] font-[font2] tracking-widest">SYSTEMS ACTIVE: M-DRIVE TELEMETRY</h1>
          <h3 className="text-[1vw] font-[font1] tracking-widest ">REAL-TIME F90 DATA </h3>
        </div>

        <div className=" h-[12vh] w-full mt-3">
          <TargetCursor spinDuration={2} hideDefaultCursor parallaxOn hoverDuration={0.2} cursorColor="#ffffff" cursorColorOnTarget="#B497CF" />
          <div className="button mt-2.5 ml-120 gap-6 flex">
            <button
              onClick={() => setactiveMode("EFFICIENT")}
              className={`cursor-target border rounded-xl px-4 py-0.5 transition-colors duration-300  ${
                activeMode === "EFFICIENT"
                  ? "border-emerald-600 text-emerald-600 bg-emerald-900/20"
                  : "border-gray-600 text-slate-300 hover:border-gray-400"
              }`}
            >
              EFFICIENT
            </button>

            <button
              onClick={() => setactiveMode("SPORT")}
              className={`cursor-target border rounded-xl px-4 py-0.5 transition-colors duration-300  ${
                activeMode === "SPORT" ? "border-red-600 text-red-500 bg-red-900/20" : "border-gray-600 text-slate-300 hover:border-gray-400"
              }`}
            >
              SPORT
            </button>

            <button
              onClick={() => setactiveMode("TRACK")}
              className={`cursor-target border rounded-xl px-4 py-0.5 transition-colors duration-300  ${
                activeMode === "TRACK" ? "border-orange-600 text-orange-500 bg-orange-900/20" : "border-gray-600 text-slate-300 hover:border-gray-400"
              }`}
            >
              TRACK
            </button>
          </div>
        </div>

        <div className=" h-[60vh] mt-2 grid grid-cols-3 gap-8 mx-20">
          {/* DIVISION-1 */}
          <div className="col1 break-all px-12 ">
            <h1 className="text-[2vw] font-mono ml-5 tracking-wide">POWERTRAIN VITALS</h1>

            <div className="flex flex-col mt-8 gap-10">
              <div className="1 flex flex-col gap-3">
                <div className=" inner text-[1.5vw] flex justify-between">
                  <h3>S63 V8 OIL TEMP</h3>
                  <span className={currentData.oilTemp.color}>{currentData.oilTemp.value}</span>
                </div>
                <div className="h-[4vh] rounded-xl border border-white/20 overflow-hidden w-full">
                  <div className={`h-full transition-all duration-700 ${currentData.oilTemp.bar}`}></div>
                </div>
              </div>
              <div className="2 flex flex-col gap-3">
                <div className="inner text-[1.5vw] flex justify-between">
                  <h3>BOOST PRESSURE</h3>
                  <span className={currentData.boost.color}>{currentData.boost.value}</span>
                </div>
                <div className="h-[4vh] rounded-xl border border-white/20 overflow-hidden w-full">
                  <div className={`h-full transition-all duration-700 ${currentData.boost.bar}`}></div>
                </div>
              </div>
              <div className="3 flex flex-col gap-3">
                <div className="inner text-[1.5vw] flex justify-between">
                  <h3>COOLANT TEMP</h3>
                  <span className={currentData.coolant.color}>{currentData.coolant.value}</span>
                </div>
                <div className="h-[4vh] rounded-xl border border-white/20 overflow-hidden w-full">
                  <div className={`h-full transition-all duration-700 ${currentData.coolant.bar}`}></div>
                </div>
              </div>
              <div className="4 flex flex-col gap-3">
                <div className="inner text-[1.5vw] flex justify-between">
                  <h3>TRANSMISSION</h3>
                  <span className={currentData.trans.color}>{currentData.trans.value}</span>
                </div>
                <div className="h-[4vh] rounded-xl border border-white/20 overflow-hidden w-full">
                  <div className={`h-full transition-all duration-700 ${currentData.trans.bar}`}></div>
                </div>
              </div>
            </div>
          </div>
          {/* DIVISION-2 */}
          <div className="col2  px-4 ">
            <h1 className="text-[2vw] font-mono ml-6 tracking-wide">DYNAMIC CHASSIS LOAD</h1>

            <div className="texts relative ">
              <span className="font-mono absolute text-[0.80vw] text-slate-500 ml-45 mt-2.5">+ACCEL</span>
              <span className="font-mono absolute text-[0.80vw] text-slate-500 ml-92 mt-48 ">RIGHT</span>
              <span className="font-mono absolute text-[0.80vw] text-slate-500 ml-45 mt-91 ">-BRAKE</span>
              <span className="font-mono absolute text-[0.80vw] text-slate-500 mt-48 mr-5">LEFT</span>
            </div>

            <div className="1 flex flex-col">
              <div className="circle relative mt-7 ml-8 border border-white/30 h-83 w-83 rounded-full">
                <div className="hline absolute border-y border-white/30 w-83 mt-42"></div>
                <div className="vline absolute border-x h-83 ml-42  border-white/30 "></div>
                <div
                  className={`absolute rounded-full h-5 w-5 transition-all duration-700 ease-out ${currentData.gForce.dotPos} ${currentData.gForce.dotColor}`}
                ></div>
              </div>
              <div className="text1 flex justify-between  font-mono mt-5">
                <span className={`${currentData.gForce.textColor} mx-12 text-[1.6vw] mb-2 uppercase`}>Lateral: </span>
                <span className={`${currentData.gForce.textColor} mx-12 text-[1.6vw]`}>{currentData.gForce.lateral}</span>
              </div>
              <div className="text1 flex justify-between font-mono mt-2">
                <span className={`${currentData.gForce.textColor} ml-12 text-[1.6vw] uppercase`}>Longitudinal: </span>
                <span className={`${currentData.gForce.textColor} ml-12 mr-12 text-[1.6vw]`}>{currentData.gForce.longitudinal}</span>
              </div>
            </div>
          </div>
          {/* DIVISION-3 */}
          <div className="col3 break-all px-5 relative h-full flex flex-col">
            <h1 className="text-[2vw] font-mono ml-19 tracking-wide mb-10">CONTACT PATCH </h1>

            <div className="image">
              <img
                className="absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[65%] opacity-60 z-0 pointer-events-none object-contain"
                src="/Telemetry/svg.png"
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between h-[50%] px-8 mt-2">
              <div className="flex justify-between">
                <div className="flex flex-col items-center font-mono">
                  <span className="text-gray-400 text-[1.2vw]">FL</span>
                  <span className="text-white text-[1.5vw]">30 PSI</span>
                  <span className="text-amber-500 text-[1.3vw]">63°C</span>
                </div>
                <div className="flex flex-col items-center font-mono">
                  <span className="text-gray-400 text-[1.2vw]">FR</span>
                  <span className="text-white text-[1.5vw]">31 PSI</span>
                  <span className="text-amber-500 text-[1.3vw]">61°C</span>
                </div>
              </div>

              <div className="flex justify-between mt-12">
                <div className="flex flex-col items-center font-mono">
                  <span className="text-gray-400 text-[1.2vw]">RL</span>
                  <span className="text-white text-[1.5vw]">32 PSI</span>
                  <span className="text-amber-500 text-[1.3vw]">66°C</span>
                </div>
                <div className="flex flex-col items-center font-mono">
                  <span className="text-gray-400 text-[1.2vw]">RR</span>
                  <span className="text-white text-[1.5vw]">34 PSI</span>
                  <span className="text-amber-500 text-[1.3vw]">67°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemetry;
