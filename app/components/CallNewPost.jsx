import React from "react";
import { MdPostAdd, MdRotate90DegreesCcw } from "react-icons/md";

const CallNewPost = ({ showModel }) => {
  return (
    <header className="mt-1 mb-8 p-4 text-center flex justify-between items-center border-b-2 border-[#ece1fa]">
      <h1 className="text-[2rem] flex gap-[1.5rem] items-center text-[#ece1fa]">
        <MdRotate90DegreesCcw />
        MarPost power by React
      </h1>
      <p>
        <button
          className="inline-flex items-center gap-[0.5rem] px-[0.75rem] py-[1.5rem] bg-[#a990fb] text-[#2a2630] border-0 rounded-md shadow cursor-pointer font-bold"
          onClick={showModel}
        >
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
};

export default CallNewPost;
