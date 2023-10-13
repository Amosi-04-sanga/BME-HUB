"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { mission, vision } from "@/public/assets";

const OurVersion = () => {
  return (
    <>
      <div className='dark:text-black mt-0 bg-[url("/assets/home/blueBG.svg")] bg-center bg-no-repeat bg-cover py-20'>
        <Fade>
          <div className="lg:px-40 sm:p-10 mb-10 p-4 py-20 flex flex-col relative w-full bg-[url('/assets/home/bluebg.svg')] bg-cover bg-no-repeat bg-bottom">
            <Image
              src={mission}
              alt="mission icon"
              width={100}
              height={100}
              className="block mx-auto"
            />
            <h2 className="mt-4 text-center font-bold">OUR MISSION</h2>
            <p className="mt-4 indent-4 pb-10">
              Our mission is to promote and encourage advanced health facilities
              for all people all over the country through various Innovations
              and Projects and also through the knowledge and skills acquired
              from our University. This can be fulfilled through Coordination,
              Training of Biomedical students through projects and innovations,
              continuous updates of their knowledge basing on evidences in
              health service delivery and promotion of health policies and
              guidelines as provided by the Ministry of Health.
            </p>
          </div>
        </Fade>

        <Fade>
          <div className="flex lg:px-40 sm:p-10 pb-10 flex-col mt-10 p-4">
            <Image
              src={vision}
              alt="vision icon"
              width={100}
              height={100}
              className="block mx-auto"
            />
            <h4 className="text-center mt-4 uppercase font-bold">our vision</h4>
            <div className="mt-4">
              <p className="indent-4 pb-10">
                Our vision is to expose Biomedical Engineering across the
                horizons of the country so as to create good pathway for
                upcoming engineers. We believe in helping each other with
                outstanding skills of different fields of engineering as a means
                of exposing Biomedical Engineering to high standards and also
                bring positive changes in relation the course and community in
                general hence enhance its growth. Our intention is to spread
                awareness and knowledge related to Biomedical Engineering in
                different horizons of the country for easy accessibility. This
                will help to create a good pathway for upcoming Biomedical
                students to increase in number and acquire good knowledge from
                their institutions and bring positive changes and revolution to
                the country as far as Biomedical Engineering is concerned hence
                enhancing its growth.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default OurVersion;

