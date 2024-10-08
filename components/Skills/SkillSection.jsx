/**
 * .
 */
import React from 'react';
import SkillCard from './SkillCard';

const SkillSection = ({ title, skills }) => {
  return (
    <>
      <h2 className="grow shrink text-5xl font-bold leading-tight text-neutral-400 w-[699px] max-md:max-w-full max-md:text-4xl">
        {title}
      </h2>
      {skills.map((skill, index) => (
        <SkillCard key={index} title={skill.title} progress={skill.progress} />
      ))}
    </>
  );
};

export default SkillSection;