"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();
  const currentMode = mode === "light" ? "sun" : "moon";

  const handleThemeSwitch = (theme: string) => {
    setMode(theme);
    if (theme !== "system") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
  };
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[stat=open]:bg-light-900 bottom-0  dark:focus:bg-dark-200 dark:data-[stat=open]:bg-dark-200">
          <Image
            src={`/assets/icons/${currentMode}.svg`}
            width={20}
            height={20}
            alt={currentMode}
            className="active-theme"
          />
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] min-w-[120px] mt-3 rounded border py-3 dark:border-dark-400 dark:bg-dark-300  ">
          {themes?.map((menuItem) => (
            <MenubarItem
              key={menuItem.label}
              className="flex items-center px-2.5 py-2 gap-4 dark:focus:bg-dark-400"
              onClick={() => handleThemeSwitch(menuItem.value)}
            >
              <Image
                src={menuItem.icon}
                height={16}
                width={16}
                alt={menuItem.value}
                className={menuItem.value === mode ? "active-theme" : ""}
              />
              <p
                className={`body-semibold  ${menuItem.value === mode ? "text-primary-500" : "text-dark100_light900"} `}
              >
                {menuItem.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
