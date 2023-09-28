import CommentCard from "@/components/cards/CommentCard";
import ThreadCard from "@/components/cards/ThreadCard";
import { Comment } from "@/components/forms";
import { fetchThreadById, fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  // return null if no user
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding"); // to complete registration

  // fetch thread by id
  const thread = await fetchThreadById(params.id);

  return (
    <section className="relative max-sm:p-2 p-6 mt-8">
      <div>
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={user?.id}
          parentId={thread.parentId}
          content={thread.text}
          image={thread.image}
          author={thread.author}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      </div>
      <div className="mt-7">
        <Comment
          threadId={thread.id}
          currentUserImg={userInfo.image}
          currentUserName={userInfo.name}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-7">
        <h4 className="text-right"> {thread.children.length} Comments </h4>
        {thread.children.map((childItem: any) => {
          return (
            <CommentCard
              key={childItem._id}
              id={childItem._id}
              currentUserId={user?.id}
              parentId={childItem.parentId}
              content={childItem.text}
              author={childItem.author}
              createdAt={childItem.createdAt}
              comments={childItem.children}
              image={""}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;
