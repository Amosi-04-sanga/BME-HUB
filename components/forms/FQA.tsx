"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "@/constants";
import { Fade } from "react-awesome-reveal";


const FQA = () => {
  return (
    <Fade>
      <section className="mt-20">
        <h2 className="font-bold text-center">FREQUENCY ASKED QUESTIONS</h2>
        <div className="mt-4">
          <Accordion type="single" collapsible className="w-full">
            {Faq.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className=" text-left hover:no-underline">
                  {" "}
                  {item.question}{" "}
                </AccordionTrigger>
                <AccordionContent className="bg-blue-300 dark:text-black p-2 text-[16px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Fade>
  );
};

export default FQA;
