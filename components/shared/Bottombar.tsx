"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottomsidebar_link flex flex-col justify-center items-center ${
                isActive && "bg-blue"
              } hover:bg-blue p-1 rounded-md transition duration-300`}
            >
              <Image
                width={24}
                height={24}
                alt={link.label}
                src={link.imgURL}
              />
              <p className="max-sm:hidden text-light-1 text-subtle-medium">
                {" "}
                {link.label}{" "}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
