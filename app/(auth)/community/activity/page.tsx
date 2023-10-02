import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser, getActivities } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const activity = await getActivities(userInfo._id);

  return (
    <div className="block w-full">
      <h1 className='uppercase text-center mt-10 font-bold'>members replied to your posts</h1>

      <section className='flex flex-col gap-5 p-4 sm:px-20'>
        {activity.length > 0 ? (
          <>
            {activity.map((activity) => (
              <Link key={activity._id} href={`/community/thread/${activity.parentId}`}>
                
                <article className='activity-card'>
                  <Image
                    src={activity.author.image}
                    alt='user_logo'
                    width={20} 
                    height={20}
                    className='rounded-full object-cover'
                  />
                  <p className='!text-small-regular text-light-1'>
                    <span className='mr-1 text-primary-500'>
                      {activity.author.name}
                    </span>{" "}
                    replied to your post
                  </p>
                </article>
              </Link>
            ))}
          </>
        ) : (
          <p className='!text-base-regular text-light-3'>No reply yet</p>
        )}
      </section>
    </div>
  );
}

export default Page;


/*  import { fetchUser, getActivities } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  // get notifications.
  const activity = await getActivities(userInfo._id);

  return (
    <section>
      <h2 className="head-text mt-10">Activity</h2>
      <section className="mt-10 flex flex-col gap-5">
        {activity.length > 0 ? (
          <>
            {activity.map((item) => {
              return (
                <Link key={item._id} href={`/thread/${item.parentId}`}>
                  <article className="activity-card">
                    <Image
                      src={item.author.image}
                      alt={`a notification from ${item.authpr.name}`}
                      width={20}
                      height={20}
                      className="object-contain  rounded-full"
                    />

                    <p className="!text-base-regular text-light-1">
                      <span className="text-primary-500 mr-1" > {item.author.name} </span>{" "}
                      <span>replied to your thread</span>
                    </p>
                  </article>
                </Link>
              );
            })}
          </>
        ) : (
          <p className="!tex-base-regular text-gray-1">No activity yet!</p>
        )}
      </section>
    </section>
  );
};

export default page;

*/