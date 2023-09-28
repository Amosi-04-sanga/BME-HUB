import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import React from "react";


const page = async () => {
  const user = await currentUser()
  if(!user) return null

  const userInfo = await fetchUser(user.id) // from database: POSTGRES/MONGODB

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username|| user?.username,
    name: userInfo?.name || user?.firstName || "",
    image: user?.imageUrl || userInfo?.image,
    bio: userInfo?.bio || ""
  };

  return (
    <div className="max-xs:p-2 p-6 flex flex-col max-w-2xl mx-auto">
      <h2 className="mt-8 uppercase text-center font-bold">onboarding</h2>
      <p className="mt-4 text-center">complete your profile to be part of BME community.</p>
    
       <section className="mt-10 bg-dark-3 rounded-md">
           <AccountProfile user={userData}  />
       </section>
    </div>
  );
};

export default page;
