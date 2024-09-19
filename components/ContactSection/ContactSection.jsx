/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Image from 'next/image';
import ContactItem from './ContactItem';

const contactData = [
  {
    icon: '/images/email-icon.png',
    title: 'Email',
    content: 'lsj.liu@mail.utoronto.ca',
    isLink: true
  },
  {
    icon: '/images/phone-icon.png',
    title: 'Phone',
    content: '+1 (514) 692-9575',
    isLink: true
  },
  {
    icon: '/images/linkedin-icon.png',
    title: 'LinkedIn',
    content: 'https://www.linkedin.com/in/shijia-liu123/',
    isLink: false
  },
  {
    icon: '/images/github-icon.png',
    title: 'GitHub',
    content: 'https://github.com/LSJ-Allen',
    isLink: false
  }
];

function ContactSection() {
  return (
    <div id='contact-info'>
      <section className="flex overflow-hidden flex-col justify-center px-16 py-32 w-full bg-zinc-800 min-h-[570px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] text-neutral-400 max-md:max-w-full">
          <h2 className="self-start text-base font-semibold whitespace-nowrap">
            Connect
          </h2>
          <div className="flex flex-col mt-4 w-full max-md:max-w-full">
            <h1 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg max-md:max-w-full">
              I'd love to hear from you! Please feel free to reach out.
            </p>
          </div>
        </div>
        <div className="flex flex-col py-2 min-w-[240px] w-[500px] max-md:max-w-full">
          {contactData.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default ContactSection;