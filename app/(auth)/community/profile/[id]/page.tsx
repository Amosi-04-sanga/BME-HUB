import { ProfileHeader, ThreadsTabs } from "@/components/shared";
import ThreadTabs from "@/components/shared/ThreadsTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(params.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <section className="max-md:p-2 p-6">
      <ProfileHeader
        accountId={userInfo.id}
        authUser={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />
      <div className="mt-7">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab bg-orange-300 mx-auto">
            {profileTabs.map((tab) => {
             
              return (
                  <TabsTrigger value={`${tab.value}`} key={tab.label}>
                    <Image
                      src={tab.icon}
                      alt={`tab icon: ${tab.label}`}
                      width={24}
                      height={24}
                      className="object-contain mr-1"
                    />
                    <p className="max-sm:hidden">{tab.label}</p>
                    {tab.label === "Threads" && (
                      <p className="text-light-2 ml-1 rounded-sm bg-light-4 px-2 py-1">
                        {userInfo?.threads?.length} posts
                      </p>
                    )}
                  </TabsTrigger>
              );
            })}
          </TabsList>
          {profileTabs.map((tab) => (
            <TabsContent
              key={`content-${tab.label}`}
              value={tab.value}
              className="w-full text-light-1"
            >
              <ThreadsTabs
                currentUserId={user.id}
                accountId={userInfo.id}
                accountType="User"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default page;
