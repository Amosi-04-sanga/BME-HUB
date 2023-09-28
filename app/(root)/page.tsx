import ContactForm from "@/components/forms/ContactForm";
import FQA from "@/components/forms/FQA";
import SubscribeForm from "@/components/forms/SubscribeForm";
import About from "@/components/shared/About";
import Community from "@/components/shared/Community";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import News from "@/components/shared/News";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-xs:w-[90vw] max-sm:w-[75vw] max-md:w-[80vw] mx-auto md:p-4">
        <News />
        <About />
      </div>
      <Community />
      <div className="max-xs:w-[90vw] max-sm:w-[75vw] max-md:w-[80vw] mx-auto md:p-4">
        <FQA />
        <ContactForm />
        <SubscribeForm/>
      </div>
      <Footer />
    </>
  );
}
