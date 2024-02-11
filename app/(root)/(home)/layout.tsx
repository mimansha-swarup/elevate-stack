import Navbar from "@/components/shared/navbar/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100">
      <Navbar />
      <div className="flex">
        sidebar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-32 max-md:pb-14 max-sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        right side bar
      </div>
      toaster
    </main>
  );
};

export default Layout;
