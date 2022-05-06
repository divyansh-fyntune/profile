import React, { useEffect } from "react";
import Description from "../Components/Description";
import Intro from "../Components/Intro";
import Portfolio from "./Portfolio";
import "styled-components/macro";
import Social from "../Components/Social";
function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div>
      <Intro />
      <Description />
      <Social />
    </div>
  );
}

export default Home;
