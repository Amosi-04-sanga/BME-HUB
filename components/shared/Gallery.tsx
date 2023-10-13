"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { galleryhome } from "@/public/assets";

const Gallery = () => {
  return (
    <section className="mt-20 dark:text-black">
      <Fade>
        <div className="flex flex-col mb-10">
          <Image
            src={galleryhome}
            alt="gallery icon"
            width={60}
            height={60}
            className="block mx-auto"
          />

          <div className="text-center mt-4">
            <h1 className="font-bold uppercase half-underline inline-block">
              Gallery
            </h1>
          </div>
          <p className="mt-6 indent-4">
            This is a photos collection from different events, we believe that
            pictures have the power to transport you back in time, evoke
            emotions, and tell a story all on their own. Our Photos Section is a
            dedicated space where we curate and share a kaleidoscope of moments
            from various events, allowing you to relive the magic, laughter, and
            camaraderie that define these special occasions.
          </p>

          <Button className="bg-gradient-to-r from-green-400 to-blue-500 rounded-md block mx-auto mt-10">
            <Link href="/gallery">view</Link>
          </Button>
        </div>
      </Fade>
    </section>
  );
};

export default Gallery;
