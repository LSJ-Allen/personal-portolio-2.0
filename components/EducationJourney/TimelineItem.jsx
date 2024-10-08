/**
 * .
 */
import React from "react";
import Image from "next/image";
import TimelineDivider from "../TimeLineDivider";

function TimelineItem({
  institution,
  period,
  degree,
  description,
  imageSrc,
  imageAlt,
  isReverse,
}) {
  return (
    <div className="flex items-stretch flex-wrap gap-10 items-start w-full max-md:max-w-full mb-10">
      {isReverse ? (
        <>
          <TextContent
            institution={institution}
            period={period}
            degree={degree}
            description={description}
            isReverse={isReverse}
          />
          <TimelineDivider />
          <ImageContent imageSrc={imageSrc} imageAlt={imageAlt} />
        </>
      ) : (
        <>
          <ImageContent imageSrc={imageSrc} imageAlt={imageAlt} />
          <TimelineDivider />
          <TextContent
            institution={institution}
            period={period}
            degree={degree}
            description={description}
            isReverse={isReverse}
          />
        </>
      )}
    </div>
  );
}

function TextContent({ institution, period, degree, description, isReverse }) {
  const textAlignClass = isReverse ? "text-right" : "";
  return (
    <div
      className={`flex flex-col flex-1 shrink pt-4 basis-[18px] min-w-[240px] text-neutral-400 max-md:max-w-full ${textAlignClass}`}
    >
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full font-bold max-md:max-w-full">
          <h2 className="text-4xl leading-10 max-md:max-w-full">
            {institution}, {period}
          </h2>
          {degree && (
            <h3 className="mt-6 text-3xl leading-10 max-md:max-w-full">
              {degree}
            </h3>
          )}
        </div>
        <p className="mt-8 text-lg leading-7 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
}

function ImageContent({ imageSrc, imageAlt }) {
  return (
    <div className="flex flex-1 shrink gap-2.5 py-8 basis-[18px] min-h-[672px] min-w-[240px] max-md:max-w-full">
      <div className="flex flex-1 shrink gap-2.5 basis-0 min-w-[240px] size-full max-md:max-w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="responsive"
          width={240}
          height={240}
          className="object-contain flex-1 shrink w-full aspect-[0.97] basis-0 min-w-[240px] rounded-[31px] max-md:max-w-full"
        />
      </div>
    </div>
  );
}

export default TimelineItem;
