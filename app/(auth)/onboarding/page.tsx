import { AccountProfile } from "@/components/forms";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";

const page = async () => {
  const user = await currentUser();
  if(!user) return null
  const userInfo = await fetchUser(user.id);

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: user?.username || userInfo?.username,
    name: user?.firstName || userInfo.name || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="flex flex-col max-w-3xl mx-auto justify-start px-10 py-20 text-light-2">
      <h1 className="head-text">onboarding</h1>
      <p className="mt-3 text-base-regular">complete a profile to use Thread</p>

      <section className="mt-10 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="continue" />
      </section>
    </main>
  );
};

export default page;
