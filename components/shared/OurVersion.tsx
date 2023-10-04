"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Fade } from "react-awesome-reveal";

const OurVersion = () => {
  return (
    <>
      <div className='dark:text-black mt-0 bg-[url("/assets/home/blueBG.svg")] bg-center bg-no-repeat bg-cover py-20'>
        <Fade>
          <div className="pb-10 mb-10 p-4 flex flex-col relative w-full bg-[url('/assets/home/bluebg.svg')] bg-cover bg-no-repeat bg-bottom">
            <h2 className="mt-4 text-center font-bold">OUR MISSION</h2>
            <p className="mt-4 indent-4">
              To promote and encourage advanced health facilities for all people
              all over the country through various
              innovations,projects,knowledge and skills from universities ...
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
        </Fade>

        <Fade>
          <div className="flex flex-col mt-10 p-4">
            <h4 className="text-center uppercase font-bold">our vision</h4>
            <div className="mt-4">
              <p className="indent-4">
                To expose Biomedical Engineering across the horizons of the
                country so as to create a good pathway for upcoming Biomedical
                students ... We are students biomedical engineering of muhimbili
                university of health and allied sciences organized together to
                connect biomedical personnels ranging from students to engineers
                from different instistutions, where we can learn, get connected
                and share ideas.{" "}
              </p>
              <p className="mt-2 indent-4">
                The React Native ecosystem is far and wide, and people can be
                part of it in many forms; here you will find but a partial
              </p>
            </div>
            <Link href="/" className="mt-4 text-red-900 text-center">
              Contact us to learn more
            </Link>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default OurVersion;
