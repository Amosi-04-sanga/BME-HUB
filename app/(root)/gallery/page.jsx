"use client";
import GalleryCard from "@/components/blog/GalleryCard";
import { Button } from "@/components/ui/button";
import { createClient } from "contentful";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const galley = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: `is678jpe91kq`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `D_CG88-PJG3pvVhj358E3fGQGXc3wU4Z5nQSgxKbn7U`,
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
    <div
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
      className="mx-auto p-4"
    >
      <div className="flex mt-8 items-center justify-start">
        <Button
          onClick={() => router.back()}
          className="px-4 sticky top-0 bg-gradient-to-br text-[12px] from-green-600 to-blue-300 rounded-md ml-4 text-black"
        >
          Back
        </Button>
        
      </div>

      {!data ? (
        <h3 className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-Bold">
          BME...
        </h3>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }} className="mt-8">
          {data.map((item) => (
            <div className="block" style={{ margin: "10px", width: '260px' }} key={item.sys.id}>
              <Link href={`/gallery/${item.sys.id}`}>
                <GalleryCard {...item.fields} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default galley;
