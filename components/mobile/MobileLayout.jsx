/**
 * .
 */
import React from "react";
import MobileNavigation from "./MobileNavigation";
import MobileHero from "./MobileHero";
import MobileAboutMe from "./MobileAboutMe";

const MobileLayout = () => {
  return (
    <div className="flex overflow-hidden flex-col w-full bg-zinc-800">
      <div className="flex gap-2.5 items-center w-full">
        <div className="flex gap-2.5 items-center self-stretch my-auto w-full">
          <MobileNavigation />
        </div>
      </div>
      <MobileHero />
      <MobileAboutMe/>
    </div>
  );
};

export default MobileLayout;
