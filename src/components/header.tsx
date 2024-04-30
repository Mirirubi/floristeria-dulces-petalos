"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHeaderContext } from "../context/headerContext";

const Header = () => {
  const { headerInfo } = useHeaderContext();
  const currentPath = usePathname();
  const splittedPath = currentPath.split("/").filter((path) => path);

  const styledCompanyName = (
    <p className="font-['Snell_Roundhand'] text-2xl  mr-2">
      Floristería Dulces Pétalos 💐
    </p>
  );

  const getCompanyName = () => {
    const homePath = "/";
    if (currentPath === homePath) {
      return <React.Fragment>{styledCompanyName}</React.Fragment>;
    }
    return (
      <React.Fragment>
        <Link
          href={`/`}
          className="hover:underline underline-offset-4 decoration-1"
        >
          {styledCompanyName}
        </Link>
      </React.Fragment>
    );
  };

  const getBreadcrumbs = () => {
    return (
      <>
        {splittedPath.map((path, index) => {
          const crumbRoute = `/${splittedPath.slice(0, index + 1).join("/")}`;
          if (crumbRoute === currentPath) {
            return (
              <React.Fragment key={index}>
                {"/"}
                <a className="mx-2 font-bold">
                  {headerInfo?.breadcrumbName || path}
                </a>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index}>
              {"/"}
              <Link className="hover:underline mx-2" href={crumbRoute}>
                {path}
              </Link>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="w-full h-20 z-10 bg-manz sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full text-blueStone ">
            <nav>
              {getCompanyName()}
              <div className="text-sm italic">{getBreadcrumbs()}</div>
            </nav>
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
