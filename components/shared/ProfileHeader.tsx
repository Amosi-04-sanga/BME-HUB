import Image from "next/image";
import React from "react";

interface Props {
  accountId: string;
  authUser: string;
  name: string;
  username: string;
  bio: string;
  imgUrl: string;
}

const ProfileHeader = ({
  accountId,
  authUser,
  name,
  username,
  bio,
  imgUrl,
}: Props) => {
  return (
    <div className="flex flex-col justify-start w-full mt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-24 h-24 object-contain">
            <Image
              src={imgUrl}
              alt={name}
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-light-1 text-heading3-bold text-left">
              {" "}
              {name}{" "}
            </h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
          </div>
        </div>
      </div>
    
      <p className="mt-6 max-w-lg text-base-regular text-light-2"> {bio} </p>
      <div className="mt-7 w-[30%] h-0.5 bg-indigo-300" />
    </div>
  );
};

export default ProfileHeader;
