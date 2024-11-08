import React from "react";
import Sider from "../static/Sider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="border rounded-md m-4 min-h-[95vh] overflow-auto">
      <div className="fixed w-[200px] h-[94.7vh] border-r  bg-green-50">
        <Sider />
      </div>
      <div>
        <div className="w-full flex justify-end">
          <div className="w-[calc(100vw-240px)] bg-red-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
