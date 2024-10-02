/**
 * .
 */
import React from "react";
import ProjectTimeline from "./ProjectTimeline";

const projectsData = [
  {
    university: "University of Toronto",
    location: "Toronto, Canada",
    title: "LLM Guided Minecraft Agent",
    date: "Jan 2024 – April 2024",
    description: [
      "Used PyTorch to enable communication between STEVE1, an autonomous agent in Minecraft, and GPT, granting it the ability to decompose complex natural language tasks via prompt engineering.",
      "Improved complex task completion rate to 20%-60% from 0%, significantly enhanced the agent's ability to perform long-horizon tasks."
    ]
  },
  {
    university: "University of Toronto",
    location: "Toronto, Canada",
    title: "Key-Value Store Database",
    date: "Sep 2023 – Dec 2023",
    description: [
      "Created a robust key-value store database in C++ for a course project.",
      "Implemented support for various data structures, including LSM Tree, B-Tree, and append-only tables, with the ability to seamlessly switch between them.",
      "Incorporated essential operations such as deletes, point and range queries, and updates.",
      "Utilized multiple design patterns, to ensure correctness, scalability, and efficiency.",
      "Achieved a reading throughput of up to 1.2 million operations/s and a writing throughput of 0.8 million operations/s."
    ]
  },
  {
    university: "McGill University",
    location: "Montreal, Canada",
    title: "Image Analysis Software",
    date: "May 2022 - Aug 2022",
    description: [
      "Created an image analysis software from ground up in Python to help accelerate manual image annotation in a biomedical lab.",
      "The software incorporated multiple computer vision algorithm using OpenCV and a user friendly GUI. It reduced annotation process by more than 80%, significantly boosted research efficiency."
    ]
  },
  {
    university: "McGill University",
    location: "Montreal, Canada",
    title: "Object Segmentation of Lab Videos",
    date: "May 2021 - Aug 2021",
    description: [
      "Utilized Mask RCNN with the help of TensorFlow to segment videos to growing hydrate crystals.",
      "Loaded pre-trained weights and fine tuned the model with task specific data. Model achieved 80% with limited dataset."
    ]
  }
];

function ProjectsPage() {
  return (
    <main className="flex overflow-hidden flex-col justify-center px-16 py-28 bg-zinc-800 max-md:px-5 max-md:py-24">
      <section className="flex flex-col justify-center items-center w-full max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[768px]">
          <header className="flex flex-col justify-center w-full max-w-screen-md text-neutral-400 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <h1 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
                Projects
              </h1>
            </div>
          </header>
          <ProjectTimeline projects={projectsData} />
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;