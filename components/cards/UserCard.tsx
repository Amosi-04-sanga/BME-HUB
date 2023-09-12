'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

const UserCard = ({ id, name, username, imgUrl, personType }: Props) => {
  const router = useRouter();

  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <Image
          src={imgUrl}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full object-contain"
        />
        <div className="text-ellipsis flex-1">
          <h4 className="text-base-semibold text-light-1"> {name} </h4>
          <p className="text-small-medium text-gray-1"> @{username} </p>
        </div>
      </div>
      <Button
        onClick={() => router.push(`/profile/${id}`)}
        className="user-card_btn"
      >
        view
      </Button>
    </article>
  );
};

export default UserCard;
