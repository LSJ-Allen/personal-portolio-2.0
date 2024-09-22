"use client"
import React from "react";
import TimelineItem from "./TimelineItem";

const educationData = [
  {
    institution: "University of Toronto",
    period: "Sep 2023 - Dec 2024",
    degree: "Master of Science in Applied Computing",
    description:
      "I finally got to study what I am passionate about! I made exciting and incredibly smart friends, and we still hangout from time to time!",
    imageSrc: "./images/uoft.jpg",
    imageAlt: "University of Toronto campus",
  },
  {
    institution: "McGill University",
    period: "Sep 2018 - May 2023",
    degree: "Chemical Engineering, minor in Computer Science",
    description:
      "Montreal is beautiful in summer but miserable in winter. I had a disturbing amount of exams here :(, and I still have PTSD about exams in my dreams.",
    imageSrc: "./images/mcgill.jpg",
    imageAlt: "McGill University campus",
  },
  {
    institution: "Lambrick Park Secondary School",
    period: "Sep 2015-Jun 2018",
    degree: "",
    description:
      "As My first entry of Canada, Lambrick was a small school with fewer than 700 students. Everyone there was super friendly and the teachers cared for all students. I had an incredibly high school experience there!",
    imageSrc: "./images/lambrick.jpg",
    imageAlt: "Lambrick Park Secondary School",
  },
];

const EducationJourney = () => {
  return (
      <section className="flex justify-center items-center overflow-hidden flex-col px-16 py-28 bg-zinc-800 max-md:flex max-md:flex-col max-md:px-5 max-md:py-24">
        <h1 className="flex flex-col self-center max-w-full text-5xl font-bold leading-tight text-center text-neutral-400 w-[768px] max-md:text-4xl">
          My Education Journey
        </h1>
        <div className="flex flex-col max-w-7xl mt-20 w-full max-md:mt-10 max-md:max-w-full">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              institution={item.institution}
              period={item.period}
              degree={item.degree}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              isReverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
    
  );
}

export default EducationJourney;
