'use server'
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/user.actions";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const results = await fetchPosts(1, 30);
  const user = await currentUser();

  return (
    <div className="block max-md:p-2 p-6">
      <div className="text-center mt-8">
        <h1 className="inline-block half-underline uppercase">top topics</h1>
      </div>

      <section className="flex flex-col gap-10 mt-8">
        {results.posts.length === 0 ? (
          <p className="text-center">No Thread Found!</p>
        ) : (
          <>
            {results.posts.map((post: any) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content={post.text}
                image={post.image}
                author={post.author}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
}
