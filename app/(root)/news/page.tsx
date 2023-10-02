"use client";
import PostCard from "@/components/blog/PostCard";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

const events = () => {
  const [data, setData] = useState(null);

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
        .then((entries: any) => {
          setData(entries.items);
        })
        .catch(console.error);
    };
    getitems();
  }, []);

  return (
    <div className="mt-10 block w-[95vw] mx-auto p-4">
      <h1 className="font-bold text-center text-heading3-bold">All News</h1>
      {!data ? (
        <h3 className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-Bold">
          BME...
        </h3>
      ) : (
        <div className="flex flex-wrap gap-5 mt-4 max-sm:justify-center">
          {
            data.map((item) => (
              <PostCard key={item.sys.id} id={item.sys.id} {...item.fields} />
            ))
          }
        </div>
      )}
    </div>
  );
};

export default events;
