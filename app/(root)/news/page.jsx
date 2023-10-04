"use client";
import PostCard from "@/components/blog/PostCard";
import { Button } from "@/components/ui/button";
import { createClient } from "contentful";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const events = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: `kdi2o0v2k0w9`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `4cs4zrA7stGMhhnyl9HGW6wRi6GrC6mFYuwuolTcXuA`,
      });

      client
        .getEntries()
        .then((entries) => {
          setData(entries.items);
        })
        .catch(console.error);
    };
    getitems();
  }, []);

  return (
    <div className=" block w-[95vw] mx-auto p-4">
      <div className="flex mt-8 items-center justify-start">
        <Button
          onClick={() => router.back()}
          className="px-4 sticky top-0 bg-gradient-to-br text-[12px] from-green-600 to-blue-300 rounded-md ml-4 text-black"
        >
          Back
        </Button>
        <h1 className="flex-1 font-bold text-center text-heading3-bold">All News</h1>
      </div>
      {!data ? (
        <h3 className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-Bold">
          BME...
        </h3>
      ) : (
        <div style={{display: 'flex', flexWrap: 'wrap'}} className="mt-8 max-sm:justify-center">
          {data.map((item) => (
            <PostCard key={item.sys.id} id={item.sys.id} {...item.fields} />
          ))}
        </div>
      )}
    </div>
  );
};

export default events;
