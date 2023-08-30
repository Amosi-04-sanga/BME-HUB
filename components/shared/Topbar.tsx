import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Topbar = () => {
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
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
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

        <OrganizationSwitcher 
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "px-4 py-2"
            }
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;
