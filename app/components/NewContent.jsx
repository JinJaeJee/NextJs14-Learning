"use client";

import { useState } from "react";
import { MdClose } from "react-icons/md";

const NewContent = ({ closeModel }) => {
  const [title, SetTitle] = useState("");
  const [desc, SetDesc] = useState("");

  function titleChangeHandler(event) {
    SetTitle(event.target.value);
  }

  function descChangeHandler(event) {
    SetDesc(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const NewData = {
      title: title,
      desc: desc,
    };
    closeModel();
  }

  return (
    <div className="justify-center items-center bg-[#9F70FD]">
      <form className=" flex flex-col p-6  max-w-md " onSubmit={submitHandler}>
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
            onChange={descChangeHandler}
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
            onChange={titleChangeHandler}
          />
        </p>
        <button
          type="submit"
          className="mt-[40px] p-3 bg-orangeLight rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewContent;
