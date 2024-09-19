"use client"
import * as React from "react";

function ContactButton() {
  return (
    <div className="flex gap-4 items-start mt-8 max-w-full text-lg font-bold w-[156px]">
      <div className="flex flex-col flex-1 shrink w-full basis-0">
        <button onClick={() => document.getElementById('contact-info').scrollIntoView({ behavior: 'smooth' })} className="gap-2 self-stretch px-6 py-3 bg-black text-white rounded-2xl border border-black border-solid min-h-[51px] w-[110%] max-md:px-5">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default ContactButton;