"use client"
import * as React from "react";
import Image from "next/image";
import MobileEducationItem from "./MobileEducationItem";

const educationData = [
  {
    period: "Sep 2023 - Dec 2024",
    institution: "University of Toronto",
    degree: "Master of Science in Applied Computing",
    description:
      "I finally got to study what I am passionate about! I made exciting and incredibly smart friends, and we still hangout from time to time!",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/73d855ae585844cac2cd6f55180b65edf1742ba4c8815fa207b3defad14ff803?apiKey=141d7e56fdb34d3a91ae01910f65e12a&",
  },
  {
    period: "Sep 2018 - May 2023",
    institution: "McGill University",
    degree: "Chemical Engineering, minor in Computer Science",
    description:
      "Montreal is beautiful in summer but miserable in winter. I had a disturbing amount of exams here :(, and I still have PTSD about exams in my dreams.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e28686e4017e4eb4d0fce99257643dd391c41eed05124dabedc67c7da1f24ba6?apiKey=141d7e56fdb34d3a91ae01910f65e12a&",
  },
  {
    period: "Sep 2015-Jun 2018",
    institution: "Lambrick Park Secondary School",
    degree: "",
    description:
      "As My first entry of Canada, Lambrick was a small school with fewer than 700 students. Everyone there was super friendly and the teachers cared for all students. I had an incredibly high school experience there!",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dfe5ae2ab0e0e4f899ae2bba235b0b219654e000502e67b00506965769637560?apiKey=141d7e56fdb34d3a91ae01910f65e12a&",
  },
];

const MobileEducationJourney = () => {
  return (
    <main className="flex overflow-hidden flex-col px-5 py-16 mx-auto w-full bg-zinc-800 w-full">
      <header className="flex flex-col w-full text-4xl font-bold leading-10 text-center text-neutral-400">
        <h1 className="w-full">My Education Journey</h1>
      </header>
      <section className="flex flex-col mt-12 w-full">
        {educationData.map((item, index) => (
          <MobileEducationItem
            key={index}
            period={item.period}
            institution={item.institution}
            degree={item.degree}
            description={item.description}
            imageSrc={item.imageSrc}
            isLast={index === educationData.length - 1}
          />
        ))}
      </section>
    </main>
  );
}

export default MobileEducationJourney;
