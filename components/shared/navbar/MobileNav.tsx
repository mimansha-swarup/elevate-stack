"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathName = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16 ">
      {sidebarLinks?.map((sidebarData) => {
        const isActive =
          (pathName.includes(sidebarData.route) &&
            sidebarData.route.length > 1) ||
          pathName === sidebarData.route;
        return (
          <SheetClose asChild key={sidebarData.route}>
            <Link
              href={sidebarData.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={sidebarData.imgURL}
                height={20}
                width={20}
                alt="sidebar-icon"
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {sidebarData.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/assets/icons/hamburger.svg"}
          alt="hamburger-menu"
          width={36}
          height={37}
          className="invert-color sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="background-light900_dark200 border-none"
      >
        <Link href={"/"} className="flex gap-2 items-center">
          <Image
            src={"/assets/images/site-logo.svg"}
            height={23}
            width={23}
            alt="Elevate Stack"
          />
          <p className="h2-bold  text-dark100_light900 font-spaceGrotesk">
            Elevate <span className="text-primary-500">Stack</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Log in</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button
                    className="small-medium btn-tertiary
                  light-border-2  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900"
                  >
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
