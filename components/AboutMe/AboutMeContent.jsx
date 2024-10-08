/**
 * .
 */
import React from "react";

function AboutMeContent() {
  const paragraphs = [
    "I moved from China to Canada in 2015 to Victoria, BC for high school. Victoria's tranquility and gorgeousness showed me an aspect of life quite different from what I experienced in China, and I absolutely loved it!",
    "After high school, I pursued chemical engineering at McGill University. Unfortunately, my major did not capture my passion. I found most of the courses dull and mechanical, and the industry did not appeal to me either. Things changed in second year where I took my first programming course. It was a thrilling experience, and I had a lot of fun learning the materials and doing challenging assignments. That course marked the beginning of my coding journey.",
    "My undergraduate degree took 5 years to complete. A long, exam-filled, but enlightening 5 years. Thanks to my CS minor, I got admitted into University of Toronto's graduate CS program where I expanded my network and made a lot friends who shared similar interest with me. I will graduate at the end of 2024, and I am absolutely thrilled about the future ahead.",
  ];

  return (
    <article className="overflow-hidden flex-1 shrink text-lg leading-7 min-w-[240px] max-md:max-w-full">
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p>{paragraph}</p>
          {index < paragraphs.length - 1 && <br />}
        </React.Fragment>
      ))}
    </article>
  );
}

export default AboutMeContent;
