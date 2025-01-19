import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLogedIn } from "../../auth";
const PrivateRouter = () => {
  return isLogedIn() ? <Outlet /> : <Navigate to={"/admin/login"} />;

  // if (isLogedIn()) {
  //   return <Outlet />;
  // } else {
  //   return <Navigate to={"/admin/login"}/>
  // }
};

export default PrivateRouter;
