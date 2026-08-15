import React from "react";
import Video from "./Video";

const Home_top = () => {
  return (
    <div className="font-[font1] text-[11vw] lg:text-[9vw]  lg:pt-17  ">
      <div className=" leading-[1.4] lg:leading-32">
        The <span className="text-red-800">monster</span>
      </div>
      <div className=" leading-[1.4] lg:leading-32 flex items-center justify-center">
        that
        <div className="w-[34vw] h-[13.5vw] ml-5 lg:w-[19vw] lg:h-[8vw] rounded-full overflow-hidden shrink-0">
          <Video />
        </div>
      </div>

      <div className=" leading-[1.4] flex items-center justify-center gap-[2vw] mt-1 lg:mt-1">devours the</div>
      <div className=" leading-[1.4] lg:pt-0 pt-2 lg:leading-20 flex items-center justify-center text-blue-800">tarmac</div>
    </div>
  );
};

export default Home_top;
