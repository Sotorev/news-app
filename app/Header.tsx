import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Searchbox from "./Searchbox";
import DarkModeButton from "./DarkModeButton";
const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The{" "}
            <span className="underline decoration-orange-500">LUCREV</span>
            {" "}news
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton/>
        </div>
      </div>
      {/* Navlinks components */}
      <NavLinks />
      {/* SearchBox */}
      <Searchbox/>
    </header>
  );
};

export default Header;
