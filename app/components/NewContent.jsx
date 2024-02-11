"use client";

import { MdClose, MdRotate90DegreesCcw } from "react-icons/md";

const NewContent = ({ onDescChange, onTitleChange, closeModel }) => {
  return (
    <div className="justify-center items-center bg-[#9F70FD]">
      <form className=" flex flex-col p-6  max-w-md ">
        <p className="mb-4">
          <div className="flex justify-between">
            <label
              htmlFor="desc"
              className="block text-base font-medium text-white mb-1 "
            >
              Text
            </label>
            <MdClose
              onClick={closeModel}
              className="absolute top-3 right-3 text-white hover:text-[#FF8080]"
            />
          </div>
          <textarea
            className="rounded-[10px] p-3 w-full"
            id="desc"
            required
            rows={3}
            placeholder="write something..."
            onChange={onDescChange}
          />
        </p>
        <p>
          <label
            className="block text-base font-medium text-white mb-1"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="rounded-[10px] p-3 w-full"
            type="text"
            id="title"
            required
            placeholder="name..."
            onChange={onTitleChange}
          />
        </p>
        <button
          type="submit"
          className="mt-[20px] p-3 flex justify-center border-2 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewContent;
