"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();
  const splittedPath = currentPath.split("/").filter((path) => path);

  function getBreadcrumbs() {
    return (
      <>
        {splittedPath.map((path, index) => {
          const crumbRoute = `/${splittedPath.slice(0, index + 1).join("/")}`;
          const crumbText = path[0].toUpperCase() + path.slice(1, path.length);
          if (crumbRoute === currentPath) {
            return (
              <React.Fragment key={index}>
                {">"}
                <a className="mx-2 font-bold">{crumbText}</a>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index}>
              {">"}
              <Link className="hover:underline mx-2" href={crumbRoute}>
                {crumbText}
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
