/**
 * .
 */
import React from "react";

function ExperienceItem({
  company,
  location,
  position,
  duration,
  description,
}) {
  return (
    <article className="flex flex-col flex-1 shrink justify-center self-start py-4 basis-0 min-w-[240px] text-neutral-400 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <header className="flex flex-col w-full font-bold max-md:max-w-full">
          <h3 className="mr-7 text-3xl leading-10 max-md:max-w-full">
            {company} | {location}
          </h3>
          <p className="mt-3 text-2xl leading-9 max-md:max-w-full">
            {position}
            <br />
            {duration}
          </p>
        </header>
        <ul className="mt-6 text-lg leading-7 max-md:max-w-full list-disc pl-5">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceItem;
