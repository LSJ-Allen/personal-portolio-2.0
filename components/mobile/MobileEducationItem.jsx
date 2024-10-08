/**
 * .
 */
import * as React from "react";
import Image from "next/image";

function MobileEducationItem({
  period,
  institution,
  degree,
  description,
  imageSrc,
  isLast,
}) {
  return (
    <article className="flex gap-4 w-full">
      <div className="flex flex-col items-center w-5">
        <div className="flex flex-col flex-1 items-center w-[15px]">
          <div className="flex w-[4px] border border-solid bg-stone-500 border-stone-500 min-h-[24px]" />
          <div className="flex mt-2 w-full bg-black rounded-full h-[15px] min-h-[15px]" />
          {!isLast && (
            <div className="flex flex-1 mt-2 w-[4px] border border-solid bg-stone-500 border-stone-500 min-h-[690px]" />
          )}
          <div className="flex flex-1 mt-2 w-[4px] border border-solid bg-stone-500 border-stone-500 h-full" />
        </div>
      </div>
      <div className="flex flex-col flex-1 shrink self-start basis-0 min-w-[240px]">
        <div className="flex flex-col justify-center py-4 w-full text-neutral-400">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full font-bold">
              <h2 className="text-2xl leading-9">
                {institution}, <br /> {period}
              </h2>
              {degree && <h3 className="mt-5 text-xl leading-7">{degree}</h3>}
            </div>
            <p className="mt-6 text-lg leading-7">{description}</p>
          </div>
        </div>
        <div className="flex gap-2.5 items-start pb-12 mt-4 w-full">
          <Image
            src={imageSrc}
            alt={`Image representing education at ${institution}`}
            className="object-contain flex-1 shrink w-full aspect-square basis-0 min-w-[240px]"
            width={240}
            height={240}
          />
        </div>
      </div>
    </article>
  );
}

export default MobileEducationItem;
