"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import ThemeToggler from "./ThemeToggler"; // component
import Logo from "./Logo"; // component
import Nav from "./Nav"; // component
import MobileNav from "./MobileNav"; // component

type Props = {};

export default function Header({}: Props) {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function updateScollYPos() {
      window.addEventListener("scroll", () => {
        window.scrollY > 50 ? setHeader(true) : setHeader(false);
      });
    }

    // event
    window.addEventListener("scroll", updateScollYPos);

    // remove event
    return () => window.removeEventListener("scroll", updateScollYPos);
  });

  return (
    <div
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 bg-white dark:bg-black"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="h3">My Portfolio</h1>
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-6 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
