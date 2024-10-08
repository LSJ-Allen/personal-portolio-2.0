/**
 * .
 */
import React from 'react';

const SkillCard = ({ title, progress }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center p-6 max-w-full border border-solid bg-neutral-900 border-neutral-800 h-[150px] w-[300px] max-md:px-5 rounded-xl">
      <div className="flex flex-col flex-1 justify-center items-center py-16 w-full">
        <div className="flex gap-4 items-center w-full text-4xl font-bold leading-tight whitespace-nowrap min-h-[54px] text-neutral-400">
          <div className="flex-1 shrink self-stretch my-auto w-full min-w-[240px] text-ellipsis">
            {title}
          </div>
        </div>
        <div className="flex self-stretch w-full min-h-[20px]" />
        <div className="flex flex-col w-full">
          <div className="flex flex-col bg-gray-200">
            <div
              className="flex shrink-0 h-5 bg-neutral-400"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;