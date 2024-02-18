"use client";
import React, { useCallback, useState } from "react";
import SubMainContent from "./SubMainContent";
import NewContent from "./NewContent";
import Model from "./Model";
import CallNewPost from "./CallNewPost";

const MainContent = () => {
  const [isModleVisible, setIsModelVisible] = useState(false);

  const closeModel = () => {
    setIsModelVisible(false);
  };

  const showModel = () => {
    setIsModelVisible(true);
  };

  const onDescChange = useCallback((event) => {
    setNewDesc(event.target.value);
  }, []);

  const onTitleChange = useCallback((event) => {
    setNewTitle(event.target.value);
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      {isModleVisible ? (
        <Model closeModel={closeModel}>
          <NewContent
            closeModel={closeModel}
            onDescChange={onDescChange}
            onTitleChange={onTitleChange}
          />
        </Model>
      ) : null}
      <CallNewPost showModel={showModel} />
      <div className="grid gap-6 mb-8 md:grid-cols-3"></div>
    </div>
  );
};

export default MainContent;
