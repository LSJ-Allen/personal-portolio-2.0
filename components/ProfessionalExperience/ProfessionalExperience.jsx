/**
 * .
 */
import React from "react";
import ExperienceItem from "./ExperienceItem";
import TimeLineDivider from "../TimeLineDivider";

const experiences = [
  {
    company: "Huawei Technologies Canada",
    location: "Markham, Canada",
    position: "Distributed Database Engineer",
    duration: "May 2024 - Dec 2024",
    description: [
      "Led the research on the Log-Structured Merge Tree prototype, extended from PostgreSQL, by integrating modern B-tree techniques such as prefix compression, optimistic concurrency, and cache prefetch in C++.",
      "Set up micro-benchmarks to quantify research result. Analyzed and visualized cache and CPU performances, identifying bottlenecks and optimizing performance.",
      "Significantly boosted performance by over 100% in select and insert operations.",
    ],
  },
  {
    company: "Enerkem",
    location: "Montreal, Canada",
    position: "Engineering Innovation Intern",
    duration: "May 2023 - Aug 2023",
    description: [
      "Built and ran chemical process simulation using Aspen Plus and Aspen Hysys to develop a first-of-its-kind time dependent simulation for the reactor.",
      "Applied machine learning models with PyTorch(linear regression, MLP) to predict reaction products. Discovered the lack of computational power and scalability of existing software and outlined the future direction of the project.",
    ],
  },
];

function ProfessionalExperience() {
  return (
    <section className="flex flex-col justify-center items-center w-full max-md:max-w-full bg-zinc-800 px-16 py-28 max-md:px-5 max-md:py-24">
      <div className="flex flex-col max-w-full w-[768px]">
        <header className="flex flex-col justify-center w-full text-neutral-400">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h2 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
              Professional Experience
            </h2>
            <p className="mt-6 text-lg max-md:max-w-full">
              Discover the milestones that have shaped my career.
            </p>
          </div>
        </header>
        <div className="flex flex-col mt-16 w-full max-md:mt-8 max-md:max-w-full">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-6 w-full max-md:max-w-full mb-8"
            >
              <TimeLineDivider />
              <ExperienceItem {...experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalExperience;
