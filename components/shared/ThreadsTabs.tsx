import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import ThreadCard from "../cards/ThreadCard";

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const ThreadTabs = async ({ currentUserId, accountId, accountType }: Props) => {
  // TODO: function that fetch threads...
  let result: any = await fetchUserPosts(accountId);
  if (!result) redirect("/");

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.threads.map((thread: any) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          parentId={thread.parentId}
          currentUserId={currentUserId}
          content={thread.text}
          author={thread.author} // todo
          community={thread.community} // todo
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      ))}
    </section>
  );
};
export default ThreadTabs;
