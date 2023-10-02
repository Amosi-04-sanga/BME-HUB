'use client'
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="mt-8">
      <Fade>
        <div className="flex flex-col">
          <div className="text-center">
            <h1 className="font-bold half-underline inline-block">
              WHO WE ARE.
            </h1>
          </div>
          <p className="mt-6 indent-4">
            We are students biomedical engineering of muhimbili university of
            health and allied sciences organized together to connect biomedical
            personnels ranging from students to engineers from different
            instistutions, where we can learn, get connected and share ideas.
          </p>
          <p className="mt-2 indent-4">
            The React Native ecosystem is far and wide, and people can be part
            of it in many forms; here you will find but a partial
          </p>
        </div>
      </Fade>

      <Fade>
        <div className="flex flex-col mt-10">
          <h4 className="text-center uppercase font-bold">our version</h4>
          <div className="mt-4">
            <p className="indent-4">
              We are students biomedical engineering of muhimbili university of
              health and allied sciences organized together to connect
              biomedical personnels ranging from students to engineers from
              different instistutions, where we can learn, get connected and
              share ideas.{" "}
            </p>
            <p className="mt-2 indent-4">
              The React Native ecosystem is far and wide, and people can be part
              of it in many forms; here you will find but a partial
            </p>
          </div>
          <Link href="/" className="mt-4 text-red-900 text-center">
            Contact us to learn more
          </Link>
        </div>
      </Fade>
    </section>
  );
};

export default About;
