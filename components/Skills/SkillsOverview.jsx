/**
 * .
 */
import React from 'react';
import SkillSection from './SkillSection';

const programmingLanguages = [
  { title: 'Python', progress: 100 },
  { title: 'Java', progress: 100 },
  { title: 'C++', progress: 100 },
  { title: 'JavaScript', progress: 100 },
  { title: 'TypeScript', progress: 80 },
  { title: 'C#', progress: 80 },
  { title: 'HTML/CSS', progress: 60 },
];

const frameworks = [
  { title: 'PyTorch', progress: 100 },
  { title: 'NextJS/React', progress: 100 },
  { title: 'TensorFlow', progress: 80 },
  { title: 'Express', progress: 60 },
];

const databases = [
  { title: 'PostgreSQL', progress: 100 },
  { title: 'MongoDB', progress: 60 },
];

const languages = [
  { title: 'English', progress: 100 },
  { title: 'Chinese', progress: 100 },
];

const SkillsOverview = () => {
  return (
    <main className="flex overflow-hidden gap-2.5 items-center px-16 py-28 bg-zinc-800 max-md:px-5 max-md:py-24">
      <section className="flex flex-col flex-1 shrink justify-center items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-wrap gap-20 items-end max-w-screen-md w-[768px] max-md:max-w-full">

          <SkillSection title="Programming Language" skills={programmingLanguages} />
          <SkillSection title="Framework" skills={frameworks} />
          <SkillSection title="Databases" skills={databases} />
          <SkillSection title="Language" skills={languages} />
        </div>
      </section>
    </main>
  );
};

export default SkillsOverview;