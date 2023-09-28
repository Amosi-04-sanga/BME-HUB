"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";


const Topbar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image
          width={28}
          height={28}
          className="object-contain"
          src="assets/logo.svg"
          alt="logo"
        />
        <p className="text-heading3-bold dark:text-blue text-light-1 max-xs:hidden">
          Threads
        </p>
      </Link>

      <div className="flex items-center gap-1 text-light-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <button className="bg-blue text-dark-2 rounded-md p-1">
                  sign out
                </button>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <button
          onClick={() =>{
            theme == "dark" ? setTheme("light") : setTheme("dark")
            console.log(theme)
            
          }}
          className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-blue dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg"
        >
          Toggle Mode
        </button>

        <div>
          <SignedOut>
            <SignInButton>
              <button className="bg-blue text-dark-2 rounded-md p-1">
                sign in
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
