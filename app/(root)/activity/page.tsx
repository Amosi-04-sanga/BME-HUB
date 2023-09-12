import { fetchUser, getActivities } from "@/lib/actions/user.actions";
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
