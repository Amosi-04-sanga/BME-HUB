"use client";
//import PostCard from "@/components/blog/PostCard";
//import { createClient } from "contentful";
import { useEffect, useState } from "react";

const events = () => {
  const [data, setData] = useState(null);

  /*useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: `uh943nb7fyjy`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `TrQX1WSjs0OOu8MxtpGvmF07qmMbumXmRdIEkKAvbJw`,
      });

      const response = await client.getEntries();
      setData(response.items);
    };
    getitems();
  }, []);  */

  return (
    <div className="mt-10">
      <h1>All posts</h1>

      
    </div>
  );
};

export default events;
