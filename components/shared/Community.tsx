"use client"
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Fade } from "react-awesome-reveal";

const Community = () => {
  return (
    <>
      <Fade>
        <div className='dark:text-green-900 mt-14 bg-[url("/assets/home/community-bg.svg")] bg-center bg-no-repeat bg-cover py-20'>
          <div className="pb-10 p-2 mb-10 flex flex-col relative w-full bg-[url('/assets/home/bluebg.svg')] bg-cover bg-no-repeat bg-bottom">
            <h2 className="mt-4 text-center font-bold">OUR MISSION</h2>
            <p className="mt-4 indent-4">
              BME ... Nest core team members can work directly with your team on
              a daily basis to help take your project to the next-level. Let us
              partner with you and your team to develop the most ambitious
              projects.{" "}
            </p>
            <p className="mt-2 indent-4">
              Also core team members can work directly with your team on a daily
              basis to help take your project to the next-level. Let us partner
              with you and your team to develop the most ambitious projects.
            </p>
          </div>

          <div className="flex flex-col mt-16">
            <div className="text-center">
              <h2 className="mt-4 inline-block font-bold half-underline">
                OUR COMMUNITY
              </h2>
            </div>

            <div className="flex flex-col mt-4">
              <p className="mt-4 indent-4">
                {" "}
                Welcome to our community Nest core team members can work
                directly with your team on a daily basis to help take your
                project to the next-level. Let us partner with you and your team
                to develop the most ambitious projects.
              </p>
              <p className="mt-2 indent-4">
                {" "}
                Nest core team members can work directly with your team on a
                daily basis to help take your project to the next-level. Let us
                partner with you and your team to develop the most ambitious
                projects.
              </p>
            </div>
            <Button className="bg-gradient-to-br from-green-600 to-blue-300 rounded-md block mx-auto mt-8 text-black">
              <Link href="#">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Community;
