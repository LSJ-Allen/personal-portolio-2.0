/**
 * .
 */
import React from "react";
import Image from "next/image";
import Link from "next/link";

function MobileContactItem({ icon, text, link }) {
  return (
    <div className="flex items-center mb-6">
      <Link href={`${link}`}>
        <Image src={icon} alt="" width={32} height={32} className="mr-4" />
      </Link>
        <span className="text-xl">{text}</span>
    </div>
  );
}

export default MobileContactItem;
