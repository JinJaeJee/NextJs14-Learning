import React from "react";

const MainContent = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div className="min-w-0 p-4 bg-blue-600 rounded-lg shadow-xs">
          {/* Content Area 1 */}
        </div>
        <div className="min-w-0 p-4 bg-blue-600 rounded-lg shadow-xs">
          {/* Content Area 2 */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
