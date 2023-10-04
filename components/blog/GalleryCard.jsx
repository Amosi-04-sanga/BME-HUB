import React from "react";
import { Button } from "../ui/button";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { photos } from "@/public/assets";

const GalleryCard = ({ images, title, date }) => {
  return (
    <>
      <div style={{padding: '10px', boxShadow: '1px 1px solid black'}} className="w-[250px] my-10 block dark:text-black cursor-pointer bg-blue-300 hover:bg-blue-500 transition-all duration-300 rounded-md">
        <div >
          <Image
            src={photos}
            alt="galley"
            width={50}
            height={50}
            className="block mx-auto"
          />
        </div>
        <div className="flex flex-col text-center p-2">
          <div>
            {" "}
            <h4 className="font-bold mt-2">{title}</h4>
          </div>
          <p className="text-blue-900 font-bold ">{moment(date).fromNow()} </p>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;

/*

*/
