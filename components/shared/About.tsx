"use client";
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="mt-8">
      <Fade>
        <div className="flex flex-col">
          <div className="text-center">
            <h1 className="font-bold uppercase half-underline inline-block">
              About us
            </h1>
          </div>
          <p className="mt-6 indent-4 pb-10">
            We are students of Biomedical Engineering studying from Muhimbili
            University of Health And Allied Science wanting to connect all
            Biomedical students from various Institutions to form a community
            that can share learn and exchange various Biomedical Engineering
            ideas and skills.
          </p>
          
        </div>
      </Fade>
    </section>
  );
};

export default About;
