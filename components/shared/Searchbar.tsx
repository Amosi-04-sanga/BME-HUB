"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "../ui/input";

interface Props {
  routeType: string;
}

function Searchbar({ routeType }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  /* // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 30000);  

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);   */

  return (
    <div className="flex flex-row-reverse">
      <div className="bg-black rounded-r-md px-2 flex items-center justify-center">
        <Image
          src="/assets/community/search-gray.svg"
          alt="search"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <Input
        id="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`${
          routeType !== "/search" ? "Search communities" : "Search creators"
        }`}
        className=""
      />
    </div>
  );
}

export default Searchbar;
