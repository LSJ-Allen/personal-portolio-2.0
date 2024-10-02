/**
 * .
 */
import * as React from "react";
import Image from "next/image";
import ContactButton from "./ContactButton";

function PersonalJourney() {
  return (
    <main className="flex flex-wrap flex-1 bg-zinc-800 size-full max-md:max-w-full">
      <section className="flex flex-col flex-1 shrink justify-center pr-20 pl-16 basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="text-6xl font-semibold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Navigating My Personal Journey
          </h1>
          <p className="mt-6 text-lg leading-7 max-md:max-w-full">
            Hi! I'm Shijia, and welcome to my personal website. Here, you can learn more about me and explore my work in full-stack development, databases, and machine learning.
          </p>
        </div>
        <ContactButton />
      </section>
      <Image
        src="./images/photo.JPG"
        alt="Shijia's personal journey illustration"
        className="object-contain flex-1 shrink w-full aspect-[0.8] basis-36 min-w-[240px] max-md:max-w-full"
        width={500}
        height={625}
      />
    </main>
  );
}

export default PersonalJourney;