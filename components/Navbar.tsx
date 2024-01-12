import Button from "@/common/Button";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
      </nav>
   );
};

export default Navbar;
