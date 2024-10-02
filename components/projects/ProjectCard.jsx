/**
 * .
 */
import React from "react";

function ProjectCard({ university, location, title, date, description }) {
  return (
    <article className="flex flex-col flex-1 shrink self-start pt-6 basis-0 min-w-[240px] text-neutral-400 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <header className="flex flex-col w-full font-bold max-md:max-w-full">
          <h2 className="text-3xl leading-10 max-md:max-w-full">
            {university} | {location}
          </h2>
          <h3 className="mt-4 text-2xl leading-9 max-md:max-w-full">
            {title},
            <br />
            {date}
          </h3>
        </header>
        <ul className="mt-8 text-lg leading-7 max-md:max-w-full list-disc pl-5">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;