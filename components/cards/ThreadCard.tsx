import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  id: string;
  currentUserId: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  content: string;
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
  community,
  createdAt,
  content,
  author,
  parentId,
  isComment
}: props) => {
  return (
    <article className="flex flex-col rounded-xl bg-dark-2 p-7 w-full">
      <div className="flex justify-between items-start">
        <div className="flex flex-row flex-grow flex-1 w-full gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative w-11 h-11">
              <Image
                src={author.image}
                alt="profile photo"
                fill
                className="rounded-full cursor-pointer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
            <div className="thread-card_bar" />
          </div>

          <div className="flex flex-col w-full">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="">{author.name}</h4>
            </Link>
            <p className="text-light-2 text-small-regular"> {content} </p>
            <div className="flex flex-col mt-5 gap-3">
              <div className="flex gap-3.5">
                <Image
                  alt="heart"
                  src="/assets/heart-gray.svg"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    alt="reply"
                    src="/assets/reply.svg"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Image
                  alt="repost"
                  src="/assets/repost.svg"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
                <Image
                  alt="share"
                  src="/assets/share.svg"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>

            {isComment && comments.length > 0 && (
                <Link
                  href={`/thread/${id}`}
                >
                <p className="mt-1 text-subtle-medium text-gray-1"> {comments.length} replies</p>
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
