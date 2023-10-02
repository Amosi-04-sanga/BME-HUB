import React from "react";
import { Button } from "../ui/button";
import moment from "moment";
import Link from "next/link";


const PostCard = ({
  featuredImage,
  tItle,
  id,
  eventDate,
  publishedDate,
}: {
  featuredImage: string;
  tItle: string;
  id: string;
  eventDate: Date;
  publishedDate: Date;
}) => {
  console.log(tItle);

  return (
    <>
      <div className="w-[250px]">
        <img
          src={featuredImage.fields.file.url}
          alt="news featured image"
          className="w-full max-h-[20vh] rounded-t-md"
        />
        <div className="flex flex-col bg-blue-100 border-slate-500 dark:bg-glassmorphism shadow-lg dark:shadow-gray-700 shadow-primary-500 rounded-b-md">
          <h2 className="mt-2 text-center">Overview</h2>
          <div className="flex flex-col text-left p-2">
            <p>
              {" "}
              <span className="font-bold mt-2">Title:</span> {tItle}
            </p>
            <p className="text-blue-500 font-bold uppercase">
              {eventDate && moment(eventDate).fromNow()}{" "}
            </p>
            <p className="text-[12px] mt-2 italic">
              published on {publishedDate && moment(publishedDate).startOf('hour').fromNow() }{" "}
            </p>
          </div>
          <Button className="px-1 bg-gradient-to-br text-[12px] from-green-600 to-blue-300 rounded-md block mx-auto mt-2 mb-4 text-black">
            <Link href={`/news/${id}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PostCard;
