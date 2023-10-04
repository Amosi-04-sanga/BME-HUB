import { facebook, instagram, twetter, whatsaap } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {

  const today = new Date()

  return (
    <div className=" text-white bg-footer-bg">

    <div className="mt-12 p-4 flex justify-between max-md:flex-col max-md:text-center">
      <div className="flex flex-col gap-2 mt-10">
        <Link href="#">About us</Link>
        <Link href="#">News</Link>
        <Link href="#">Galley</Link>
        <Link href="#">Community</Link>
      </div>
      <div className="flex flex-col mt-10 md:pl-6">
        <h4 className="text-center text-light-2 uppercase">lets us connect</h4>
        <p className="mt-2">
          Follow us on our social medias for up to date informations BME HUB
        </p>
        <div className="mt-4 flex gap-4 mx-auto mb-10">
          <Link href="#">
            <Image src={whatsaap} alt="whatsaap icons" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image src={facebook} alt="whatsaap icons" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image
              src={instagram}
              alt="whatsaap icons"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image src={twetter} alt="whatsaap icons" width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
      <p className="text-center pb-4"> @{today.getFullYear()} BME hub </p>
    </div>
  );
};

export default Footer;
