import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/user.actions";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const results = await fetchPosts(1, 30);
  const user = await currentUser();


  return (
    <>
      <h1 className="head-text text-left">top level threads!</h1>

      <section className="flex flex-col gap-10 mt-8">
        {results.posts.length === 0 ? (
          <p>No Thread Found!</p>
        ) : (
          <>
            {results.posts.map((post: any) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ''}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}
