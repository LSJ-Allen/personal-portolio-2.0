"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileNavigation = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const menuItems = [
    { label: "Home" },
    { label: "Educations" },
    { label: "Experiences" },
    { label: "Projects" },
    { label: "Skills" },
  ];

  const contactItems = [
    {
      icon: "./images/email-icon.png",
      text: "lsj.liu@mail.utoronto.ca",
      link: "lsj.liu@mail.utoronto.ca"
    },
    {
      icon: "./images/phone-icon.png",
      text: "(514)-692-9575",
      link: "(514)-692-9575"
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

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <nav className="flex overflow-hidden flex-col self-stretch my-auto bg-black w-full">
      <div className="flex overflow-hidden justify-between items-center pl-5 w-full border-b border-stone-500 min-h-[64px]">

      </div>
      <div className="flex flex-col px-5 pt-4 pb-6 w-full whitespace-nowrap text-neutral-400">
        <ul className="flex overflow-hidden flex-col w-full">
          {menuItems.map((item, index) => (
            <li key={index} className="py-3 w-full text-lg">
              {item.label}
            </li>
          ))}
          <li className="flex flex-col w-full">
            <div className="flex flex-col justify-center py-3 w-full text-lg">
              <button
                onClick={toggleContact}
                className="flex gap-10 justify-between items-center w-full"
                aria-expanded={isContactOpen}
              >
                <span className="self-stretch my-auto">Contact</span>
                <Image
                  src="./images/downarrow-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  className={`object-contain shrink-0 self-stretch my-auto w-6 aspect-square transform ${
                    isContactOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {isContactOpen && (
              <ul className="flex overflow-hidden flex-col w-full text-base font-semibold">
                {contactItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 items-start py-2 mt-2 w-full"
                  >
                    <Link rel="stylesheet" href={`${item.link}`}>
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="object-contain shrink-0 w-6 aspect-square"
                      />
                    </Link>
                    
                    <span className="flex-1 shrink min-w-[240px]">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavigation;
