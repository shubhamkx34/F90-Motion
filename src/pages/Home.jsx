import React from "react";
import Video from "../components/Home/Video";
import Home_top from "../components/Home/Home_top";
import Home_bottom from "../components/Home/Home_bottom";

const Home = () => {
  return (
    <div className="w-full min-h-screen overflow-y-auto bg-black">
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Video />
      </div>

      <div className="relative z-25 flex flex-col w-full min-h-screen text-center uppercase">
        <Home_top />
        <Home_bottom />
      </div>
    </div>
  );
};

export default Home;
