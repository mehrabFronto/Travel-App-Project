"use client";

import Button from "@/common/Button";
import { NAV_LINKS } from "@/constants";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav
         className="flexBetween max-container padding-container relative
         z-30 py-5">
         {/* logo */}
         <Link href="/">
            <Image
               src="/hilink-logo.svg"
               alt="logo"
               width={74}
               height={29}
            />
         </Link>
         {/* desktop navbar */}
         <ul className="hidden h-full gap-4 lg:flex">
            {NAV_LINKS.map((link) => {
               return (
                  <Link
                     key={link.key}
                     href={link.href}
                     className="regular-16 flexBetween text-gray-50 cursor-pointer px-8 pb-1.5 transition-all
                        hover:font-bold">
                     {link.label}
                  </Link>
               );
            })}
         </ul>
         {/* desktop login button */}
         <div className="lg:flexCenter hidden">
            <Button
               type="button"
               label="Login"
               icon="/user.svg"
               variant="btn_dark_green"
            />
         </div>
         {/* burger menu */}
         <div className="lg:hidden">
            <div className="absolute top-2 right-4 z-40">
               <Hamburger
                  toggled={isOpen}
                  size={30}
                  toggle={setIsOpen}
               />
            </div>
            {isOpen && (
               <div className="absolute top-0 right-0 h-screen w-8/12 bg-gray-10 border">
                  <ul className="flex flex-col w-full text-base gap-y-4 pt-10">
                     {NAV_LINKS.map((link) => {
                        return (
                           <Link
                              key={link.key}
                              href={link.href}
                              className="py-4 px-6 w-full block text-left">
                              {link.label}
                           </Link>
                        );
                     })}
                  </ul>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
