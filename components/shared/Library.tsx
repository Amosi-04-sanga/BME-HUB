"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { library } from "@/public/assets";

const Library = () => {
  return (
    <section className="mt-10 dark:text-black">
      <Fade>
        <div className="flex flex-col">
          <Image
            src={library}
            alt="gallery icon"
            width={60}
            height={60}
            className="block mx-auto"
          />

          <div className="text-center mt-4">
            <h1 className="font-bold uppercase half-underline inline-block">
              Library
            </h1>
          </div>
          <p className="mt-6 indent-4">
            Books colection for biomedical engineering... Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Dicta amet harum nobis
            reiciendis. Ut quia temporibus corrupti quam in ipsam.
          </p>

          <Button className="bg-gradient-to-r from-green-400 to-blue-500 rounded-md block mx-auto mt-10">
            <Link href="/library">Open</Link>
          </Button>
        </div>
      </Fade>
    </section>
  );
};

export default Library;
