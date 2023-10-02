
"use client";
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
    <article className={`flex flex-col rounded-xl p-4 w-full bg-dark-2`}>
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
                <img
                  src={image}
                  className="rounded-md w-full max-h-[80vh]"
                  alt="post image"
                />
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
                  <div className="flex gap-1">
                    <Image
                      alt="reply"
                      src={reply}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>
                      {" "}
                      {comments.length > 1 ? (
                        <>{comments.length} replies</>
                      ) : (
                        <>{comments.length} reply</>
                      )}
                    </p>
                  </div>
                </Link>

                <div className="flex flex-col">
                  <div className="flex gap-1">
                    <Image
                      src={share}
                      alt="share"
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <span>share</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadCard;


/*
import Image from "next/image";
import Link from "next/link";

import { formatDateString } from "@/lib/utils";
//import DeleteThread from "../forms/DeleteThread";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

function ThreadCard({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: Props) {
  return (
    <article
      className={`flex w-full flex-col rounded-xl ${
        isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"
      }`}
    >
      <div className='flex items-start justify-between'>
        <div className='flex w-full flex-1 flex-row gap-4'>
          <div className='flex flex-col items-center'>
            <Link href={`/profile/${author.id}`} className='relative h-11 w-11'>
              <Image
                src={author.image}
                alt='user_community_image'
                fill
                className='cursor-pointer rounded-full'
              />
            </Link>

            <div className='thread-card_bar' />
          </div>

          <div className='flex w-full flex-col'>
            <Link href={`/profile/${author.id}`} className='w-fit'>
              <h4 className='cursor-pointer text-base-semibold text-light-1'>
                {author.name}
              </h4>
            </Link>

            <p className='mt-2 text-small-regular text-light-2'>{content}</p>

            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
              <div className='flex gap-3.5'>
                <Image
                  src='/assets/heart-gray.svg'
                  alt='heart'
                  width={24}
                  height={24}
                  className='cursor-pointer object-contain'
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    src='/assets/reply.svg'
                    alt='heart'
                    width={24}
                    height={24}
                    className='cursor-pointer object-contain'
                  />
                </Link>
                <Image
                  src='/assets/repost.svg'
                  alt='heart'
                  width={24}
                  height={24}
                  className='cursor-pointer object-contain'
                />
                <Image
                  src='/assets/share.svg'
                  alt='heart'
                  width={24}
                  height={24}
                  className='cursor-pointer object-contain'
                />
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className='mt-1 text-subtle-medium text-gray-1'>
                    {comments.length} repl{comments.length > 1 ? "ies" : "y"}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>

      </div>

      {!isComment && comments.length > 0 && (
        <div className='ml-1 mt-3 flex items-center gap-2'>
          {comments.slice(0, 2).map((comment, index) => (
            <Image
              key={index}
              src={comment.author.image}
              alt={`user_${index}`}
              width={24}
              height={24}
              className={`${index !== 0 && "-ml-5"} rounded-full object-cover`}
            />
          ))}

          <Link href={`community/thread/${id}`}>
            <p className='mt-1 text-subtle-medium text-gray-1'>
              {comments.length} repl{comments.length > 1 ? "ies" : "y"}
            </p>
          </Link>
        </div>
      )}

      
    </article>
  );
}

export default ThreadCard;

*/
