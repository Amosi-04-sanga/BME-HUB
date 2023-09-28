import { heart, reply, share } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";

interface props {
  id: string;
  currentUserId: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  createdAt: string;
  content: string;
  image: string | "";
  author: {
    name: string;
    image: string;
    id: string;
  };
  parentId: string | null;
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currentUserId,
  comments,
  createdAt,
  content,
  image,
  author,
  parentId,
  isComment,
}: props) => {
  return (
    <article
      className={`flex flex-col rounded-xl p-4 w-full bg-dark-2`}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col flex-grow flex-1 w-full gap-4 text-light-2">
          <div className="flex gap-4 items-center">
            <Link
              href={`/community/profile/${author.id}`}
              className="relative w-16 h-16 rounded-full bg-orange-500"
            >
              <img
                src={author.image}
                alt="profile photo"
                className="rounded-full w-full h-full cursor-pointer"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <Link href={`/community/profile/${author.id}`} className="w-fit">
                <h4 className="">{author.name}</h4>
              </Link>

              <div className="text-light-3">{moment(createdAt).fromNow()}</div>
            </div>
            <div className="" />
          </div>

          <div className="flex flex-col w-full">
            <div className="w-full h-full mb-4">
              {image && (
                <img src={image} className="rounded-md w-full h-[50vh] xs:h-[64vh]  sm:h-[80vh]" alt="post image" />
              )}
            </div>
            <p className=""> {content} </p>
            <div className="flex flex-col mt-5 gap-3">
              <div className="flex gap-6">
                <div className="flex gap-3">
                  <Image
                    alt="heart"
                    src={heart}
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                  <p>23 likes</p>
                </div>
                <Link href={`/community/thread/${id}`}>
                  <div className="flex gap-3">
                    <Image
                      alt="reply"
                      src={reply}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>43 replies</p>
                  </div>
                </Link>

                <Image
                  src={share}
                  alt="share"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {" "}
                    {comments.length} replies
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadCard;
