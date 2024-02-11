"use client";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  const pathName = usePathname();
  return (
    <section className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none custom-scrollbar  max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-5 pb-6">
        {sidebarLinks?.map((sidebarData) => {
          const isActive =
            (pathName.includes(sidebarData.route) &&
              sidebarData.route.length > 1) ||
            pathName === sidebarData.route;
          return (
            <Link
              key={sidebarData.route}
              href={sidebarData.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-3`}
            >
              <Image
                src={sidebarData.imgURL}
                height={20}
                width={20}
                alt="sidebar-icon"
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
              >
                {sidebarData.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src={"/assets/icons/account.svg"}
                height={20}
                width={20}
                alt="login"
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log in
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button
              className="small-medium btn-tertiary
                  light-border-2  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900"
            >
              <Image
                src={"/assets/icons/sign-up.svg"}
                height={20}
                width={20}
                alt="sign-up"
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
