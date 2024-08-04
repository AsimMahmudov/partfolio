"use client";
import React from "react";
import Welcome from "./homeSections/Welcome";
import About from "./homeSections/About";
import Contact from "./homeSections/Contact";
import Expirience from "./homeSections/Expirience";
import Work from "./homeSections/Work";
// import { Snowfall } from "react-snowfall";

const HomePage = () => {
  return (
    <>
      {/* <Snowfall
        color="white"
        style={{
          background: "#00",
          position: "fixed",
          width: "100%",
        }}
        snowflakeCount={40}
      /> */}
      <Welcome />
      <About />
      <Expirience />
      <Work />
      <Contact />
    </>
  );
};

export default HomePage;
