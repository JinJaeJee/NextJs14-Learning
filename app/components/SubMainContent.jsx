import React from "react";

const SubMainContent = (props) => {
  return (
    <div className="min-w-0 p-4 bg-blue-600 rounded-lg shadow-xs flex  flex-col">
      <h1 className="font-bold hover:text-white mb-3">{props.title}</h1>
      <p className="font-light font-style: italic">{props.desc}</p>
    </div>
  );
};

export default SubMainContent;
