/**
 * .
 */
import React from 'react';
import Image from 'next/image';

function ContactItem({ icon, title, content, isLink }) {
  return (
    <div className="flex flex-wrap gap-4 items-start mt-6 w-full whitespace-nowrap max-md:max-w-full">
      <Image src={icon} alt="" width={36} height={36} className="object-contain shrink-0 w-9 aspect-square" />
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <h3 className="text-xl font-bold leading-snug text-neutral-400 max-md:max-w-full">
          {title}
        </h3>
        {isLink ? (
          <a href={content} className="mt-2 text-base underline text-neutral-400 max-md:max-w-full">
            {content}
          </a>
        ) : (
          <p className="mt-2 text-base text-neutral-400 max-md:max-w-full">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactItem;