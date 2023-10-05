import ContactForm from "@/components/forms/ContactForm";
import FQA from "@/components/forms/FQA";
import About from "@/components/shared/About";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import News from "@/components/shared/News";
import Gallery from "@/components/shared/Gallery";
import Library from "@/components/shared/Library";
import OurVersion from "@/components/shared/OurVersion";

export default function Home() {
  return (
    <>
      <Hero />
      <OurVersion />
      <div className="max-xs:w-[90vw] max-sm:w-[85vw] max-md:w-[70vw] mx-auto sm:px-20 lg:px-32">
        <About />
        <div className="md:hidden">
          <News />
        </div>
      </div>
      <div className="bg-[#7EDAE7] mt-10 p-4 sm:px-20 lg:px-32">
        <Library />
        <Gallery />
      </div>
      <div className="max-xs:w-[90vw] sm:px-20 mx-auto lg:px-32">
        <FQA />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
