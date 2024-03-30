"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-screen flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <div key={item.route}>
            <Link
              href={item.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

const LeftSidebar = () => {
  return (
    <section
      className="background-light900_dark200 light-border daek:shadow-none custom-scrollbar sticky left-0 top-0 flex h-screen
     flex-col justify-between overflow-y-auto border-r p-6 
     pt-36 shadow-light-300 max-sm:hidden
     lg:w-[266px]
    "
    >
      <div>
        <Image
          src="/assets/icons/hamburger.svg"
          height={36}
          width={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </div>
      <div className="background-light900_dark200 border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevFlow"
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            Dev <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div>
          <NavContent />
        </div>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <div>
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <Image
                    src="/assets/icons/account.svg"
                    alt="Sign up"
                    width={20}
                    height={20}
                    className="invert-colors lg:hidden"
                  />
                  <span className="primary-text-gradient max-lg:hidden">
                    Log in
                  </span>
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/sign-in">
                <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <Image
                    src="/assets/icons/sign-up.svg"
                    alt="Sign up"
                    width={20}
                    height={20}
                    className="invert-colors lg:hidden"
                  />
                  <span className=" max-lg:hidden">Sign up</span>
                </Button>
              </Link>
            </div>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
