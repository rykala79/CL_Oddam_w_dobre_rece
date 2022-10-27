import React from "react";
import HomeHeader from "./HomeHeader";
import HomeAbout from "./HomeAbout";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeContact from "./HomeContact";
import HomeFourSteps from "./HomeFourSteps";
import HomeWhoWeHelp from "./HomeWhoWeHelp";


export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <HomeThreeColumns />
      <HomeContact />
      <HomeFourSteps />
      <HomeWhoWeHelp />
    </>
  );
}
