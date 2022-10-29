import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";

export default function Home() {
  return (
    <>
      <HomeHeader/>
      <HomeThreeColumns/>
      <HomeFourSteps/>
      <HomeAbout/>
      <HomeWhoWeHelp/>
      <HomeContact/>
    </>
  );
}
