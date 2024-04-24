"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  function getBreadcrumbs() {
    return (
      <>
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href
              ? "hover:underline mx-2 font-bold"
              : "hover:underline mx-2";
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length);
          return (
            <React.Fragment key={index}>
              {">"}
              <Link className={itemClasses} href={href}>
                {itemLink}
              </Link>
            </React.Fragment>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="w-full h-20 bg-manz sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full text-blueStone ">
            <div className="flex items-center">
              <Link href={`/`}>
                <p className="font-['Snell_Roundhand'] text-2xl mr-2">
                  Floristería Dulces Pétalos 💐
                </p>
              </Link>
              <div className="text-sm italic">{getBreadcrumbs()}</div>
            </div>
            <Link href={`/`}>
              <Image src="/logo.svg" alt="MR" width={64} height={64} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
