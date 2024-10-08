/**
 * .
 */
import React from "react";
import Image from "next/image";

const MobileHero = () => {
  return (
    <section className="flex flex-col w-full min-h-[904px] text-neutral-400">
      <div className="flex flex-col px-5 py-16 w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-4xl font-bold leading-10">
            Navigating My Personal Journey
          </h1>
          <p className="mt-5 text-lg leading-7">
            Hi! I'm Shijia, and welcome to my personal website. Here, you can
            learn more about me and explore my work in full-stack development,
            databases, and machine learning.
          </p>
        </div>
        <div className="flex gap-4 mt-6 max-w-full text-lg font-bold w-[156px]">
          <button onClick={() => document.getElementById('contact-info').scrollIntoView({ behavior: 'smooth' })} className="gap-2 self-stretch px-6 py-3 h-full bg-black rounded-2xl border border-black border-solid w-[156px]">
            Contact Me
          </button>
        </div>
      </div>
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d46e3c0e8bcb2fe55a93e96729cb980eb588f2502dfff6911d5477cb4f69972?apiKey=141d7e56fdb34d3a91ae01910f65e12a&"
        alt="Hero image"
        width={375}
        height={375}
        className="object-contain w-full aspect-square"
      />
    </section>
  );
};

export default MobileHero;
