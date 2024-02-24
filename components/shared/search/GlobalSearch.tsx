import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="relative flex gap-1 rounded-xl background-light800_darkgradient items-center min-h-[56px] grow px-4">
        <Image
          src={"/assets/icons/search.svg"}
          alt="search"
          height={24}
          width={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search Globally"
          className="paragraph-regular no-focus  placeholder background-light800_darkgradient border-none outline-none shadow-none text-light-700"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
