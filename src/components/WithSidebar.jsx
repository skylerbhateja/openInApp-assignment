import React from "react";
import { DefaultSidebar } from "./SideBar";

const WithSidebar = ({ children }) => {
  return (
    <div className="flex flex-row w-full h-full">
      <DefaultSidebar />
      {children}
    </div>
  );
};

export default WithSidebar;
