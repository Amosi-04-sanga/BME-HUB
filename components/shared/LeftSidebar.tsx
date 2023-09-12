"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section
      className="custom-scrollbar leftsidebar"
      style={{ fontSize: "16px" }}
    >
      <div className="flex flex-1 w-full flex-col gap-4 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") {
            link.route = `${link.route}/${userId}`;
          }

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${
                isActive && "bg-blue"
              } hover:bg-blue transition duration-300`}
            >
              <Image
                width={24}
                height={24}
                alt={link.label}
                src={link.imgURL}
              />
              <p className="max-lg:hidden text-light-1"> {link.label} </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton>
            <div className=" flex gap-4 items-center justify-start cursor-pointer">
              <Image
                width={24}
                height={24}
                src="/assets/logout.svg"
                alt="logout"
              />
              <p>logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
