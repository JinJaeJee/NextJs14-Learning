import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    // The outermost container
    <div className="flex flex-col h-screen mt-3">
      <Navbar />

      <div className="flex flex-1  mt-3">
        <Sidebar />

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
