/**
 * .
 */
import React from "react";
import ProjectCard from "./ProjectCard";
import TimeLineDivider from "../TimeLineDivider";

function ProjectTimeline({ projects }) {
  return (
    <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-wrap gap-10 w-full max-md:max-w-full">
          <TimeLineDivider />
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectTimeline;