"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ContactInfo from './ContactInfo';

const NavItem = ({ href, children }) => (
  <Link href={href} className="gap-2.5 self-stretch my-auto whitespace-nowrap">
    {children}
  </Link>
);

const NavBar = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <div>
      <header className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-16 w-full  min-h-[72px] max-md:px-5 max-md:max-w-full max-sm:hidden">
        <nav className="flex overflow-hidden flex-wrap gap-8 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/educations">Educations</NavItem>
          <NavItem href="/experiences">Experiences</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/skills">Skills</NavItem>
          <div className="flex gap-2.5 items-start self-stretch my-auto whitespace-nowrap">
            <button onClick={handleContactClick}>Contact</button>
              <Image
                src="/images/downarrow-icon.png"
                alt=""
                width={24}
                height={24}
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
          </div>
        </nav>
        <div className="flex gap-4 self-stretch my-auto min-h-[40px]" />
      </header>
      {showContact && <ContactInfo/>}
    </div>
    
    
  );
};

export default NavBar;