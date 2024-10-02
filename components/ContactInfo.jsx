/**
 * .
 */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactItem = ({ src, alt, children }) => (
  <div className="flex flex-1 shrink gap-3 items-center py-2 basis-0 min-w-[240px]">
    <Image
      src={src}
      alt={alt}
      width={36}
      height={36}
      className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
    />
    <div className="self-stretch my-auto min-w-[240px] w-[264px]">{children}</div>
  </div>
);

const ContactInfo = () => (
  <section className="w-full py-8 font-semibold">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ContactItem src="/images/email-icon.png" alt="Email Icon">
          lsj.liu@mail.utoronto.ca
        </ContactItem>
        <Link href="https://www.linkedin.com/in/shijia-liu123/" target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <ContactItem src="/images/linkedin-icon.png" alt="LinkedIn icon">
            LinkedIn
          </ContactItem>
        </Link>
        <Link href="https://github.com/LSJ-Allen" target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <ContactItem src="/images/github-icon.png" alt="GitHub icon">
            GitHub
          </ContactItem>
        </Link>
      </div>
    </div>
  </section>
);

export default ContactInfo;