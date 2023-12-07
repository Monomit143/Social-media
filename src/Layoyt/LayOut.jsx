import React from "react";
import Navbar from "../Components/Navbar";

const LayOut = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default LayOut;
