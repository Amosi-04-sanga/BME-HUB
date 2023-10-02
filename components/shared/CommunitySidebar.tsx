"use client";
import { sidebarLinks } from "@/constants";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CommunitySidebar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  const LinkItem = ({
    route,
    label,
    imgURL,
    isActive,
  }: {
    route: string;
    label: string;
    imgURL: string;
    isActive: boolean;
  }) => {
    return (
      <>
        <Link
          href={route}
          className={`${
            isActive && "bg-primary-500"
          } transition-all duration-100 hover:bg-primary-500 p-2 flex gap-6 rounded-md bg-blue-300 cursor-pointer text-dark-1`}
        >
          <Image src={imgURL} alt={label} width={20} height={20} className="" />
          <p> {label} </p>
        </Link>
      </>
    );
  };

  return (
    <div className="max-md:hidden  ">
      <div
        className={`sticky top-[10vh] min-w-[30vw] bg-menu-light dark:bg-menu-dark w-fit h-[90vh] flex justify-center`}
      >
        <div className="flex flex-col gap-6 mt-10 ml-4">
          {sidebarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;

             if(link.route === "/community/profile") link.route = `${link.route}/${userId}`

            return <LinkItem key={link.label} isActive={isActive} {...link} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunitySidebar;
