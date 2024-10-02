/**
 * .
 */
import React from "react";
import Image from "next/image";
import MobileContactItem from "./MobileContactItem";

const contactItems = [
  {
    icon: "./images/email-icon.png",
    text: "lsj.liu@mail.utoronto.ca",
    link: "lsj.liu@mail.utoronto.ca"
  },
  {
    icon: "./images/linkedin-icon.png",
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/shijia-liu123/"
  },
  {
    icon: "./images/github-icon.png",
    text: "GitHub",
    link: "https://github.com/LSJ-Allen"
  },
];

function MobileAboutMe() {
  return (
    <main className="flex overflow-hidden flex-col justify-center px-5 py-16 w-full bg-zinc-800 text-neutral-400">
      <section className="flex flex-col w-full">
        <h1 className="overflow-hidden w-full text-3xl font-bold leading-tight">
          About Me
        </h1>
        <article className="overflow-hidden mt-5 w-full text-lg leading-7">
          <p>
            I moved from China to Canada in 2015 to Victoria, BC for high
            school. Victoria's tranquility and gorgeousness showed me an aspect
            of life quite different from what I experienced in China, and I
            absolutely loved it!
          </p>
          <p className="mt-4">
            After high school, I pursued chemical engineering at McGill
            University. Unfortunately, my major did not capture my passion. I
            found most of the courses dull and mechanical, and the industry did
            not appeal to me either. Things changed in second year where I took
            my first programming course. It was a thrilling experience, and I
            had a lot of fun learning the materials and doing challenging
            assignments. That course marked the beginning of my coding journey.
          </p>
          <p className="mt-4">
            My undergraduate degree took 5 years to complete. A long,
            exam-filled, but enlightening 5 years. Thanks to my CS minor, I got
            admitted into University of Toronto's graduate CS program where I
            expanded my network and made a lot friends who shared similar
            interest with me. I will graduate at the end of 2024, and I am
            absolutely thrilled about the future ahead.
          </p>
        </article>
      </section>
      <div id="contact-info">
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          {contactItems.map((item, index) => (
            <MobileContactItem key={index} icon={item.icon} text={item.text} link={item.link}/>
          ))}
        </section>
      </div>

    </main>
  );
}

export default MobileAboutMe;
