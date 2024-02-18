"use client";
import React, { useEffect } from "react";

const Model = ({ children, closeModel }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModel]);
  return (
    <div className="">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60 z-10"
        onClick={closeModel}
      />
      <dialog
        className="border-0 rounded-[10px] shadow-md p-0 overflow-hidden z-10" ///// noted overflow-hidden จะ show ขอบ
        open={true}
      >
        {children}
      </dialog>
    </div>
  );
};

export default Model;
