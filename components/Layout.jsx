/**
 * .
 */
import React from 'react';
import NavBar from './NavBar';
import ContactInfo from './ContactInfo';
import PersonalJourney from './PersonalJourney';
import AboutMe from './AboutMe/AboutMe';
import ContactSection from './ContactSection/ContactSection';
const Layout = ({ children }) => (
  <div className="flex overflow-hidden flex-col text-base bg-black text-neutral-400">
    <NavBar />
    <div className='flex justify-center items-center bg-zinc-800'>
      <div className='max-w-[1300px] bg-zinc-800'>
        <main>{children}</main>

        <PersonalJourney/>
        <AboutMe/>
        <ContactSection/>
      </div>
    </div>


    
  </div>
);

export default Layout;