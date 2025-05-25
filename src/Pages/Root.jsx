import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <p>this is root file</p>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
