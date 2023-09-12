'use client'
import {
  OrganizationSwitcher,
  SignInButton,
  SignOutButton,
  SignedIn,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Topbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image
          width={28}
          height={28}
          className=""
          src="assets/logo.svg"
          alt="logo"
        />
        <p className="text-heading3-bold text-light-1 dark:text-blue max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1 text-light-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  width={24}
                  height={24}
                  src="/assets/logout.svg"
                  alt="logout"
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div>
          <SignInButton>
            <button className="bg-blue text-dark-2 rounded-md p-1">
              sign in / register
            </button>
          </SignInButton>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
