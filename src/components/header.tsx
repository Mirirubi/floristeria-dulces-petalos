"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full h-20 bg-manz sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full text-blueStone font-['Snell_Roundhand']">
            <Link href={`/`}>
              <Image src="/logo.svg" alt="MR" width={64} height={64} />
            </Link>
            <Link href={`/`}>
              <p className="text-2xl"> Floristería Dulces Pétalos 💐</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
