import React from "react";
import { Button } from "../ui/button";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ featuredImage, tItle, id, eventDate, publishedDate }) => {
  return (
    <>
      <div style={{width: '300px', margin: '10px', borderRadius: '14px'}} className="dark:text-black bg-blue-300 rounded-[20px] ">
        <img
          src={featuredImage.fields.file.url}
          alt="news featured image"
          style={{borderRadius: '14px'}}
          className="w-full max-h-[20vh]"
        />
        <div className="flex flex-col bg-blue-100">
          <h2 className="mt-2 text-center">Overview</h2>
          <div className="flex flex-col text-left p-2">
            <p>
              {" "}
              <span className="font-bold mt-2">{tItle}</span>
            </p>
            <p className="text-blue-500 font-bold uppercase">
              {eventDate && moment(eventDate).fromNow()}{" "}
            </p>
            <p className="text-[13px] mt-2 italic">
              published on{" "}
              {publishedDate && moment(publishedDate).startOf("hour").fromNow()}{" "}
            </p>
          </div>
          <Button style={{marginBottom: '15px'}} className="px-2 bg-gradient-to-br text-[12px] from-green-600 to-blue-300 rounded-md block mx-auto mt-2 text-black">
            <Link href={`/news/${id}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PostCard;
