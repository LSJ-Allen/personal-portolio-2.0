/**
 * .
 */
import React from "react";
import AboutMeHeader from "./AboutMeHeader";
import AboutMeContent from "./AboutMeContent";

function AboutMe() {
  return (
    <main className="flex overflow-hidden flex-col justify-center px-16 py-28 bg-zinc-800 text-neutral-400 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <section className="flex flex-wrap gap-0 items-start w-full max-md:max-w-full">
        <AboutMeHeader />
        <AboutMeContent />
      </section>
    </main>
  );
}

export default AboutMe;
