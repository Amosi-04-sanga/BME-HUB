"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { createClient } from "contentful";
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import moment from "moment";
import { Fade,} from "react-awesome-reveal";


const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: `kdi2o0v2k0w9`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `4cs4zrA7stGMhhnyl9HGW6wRi6GrC6mFYuwuolTcXuA`,
      });

      const response = await client.getEntries();
      setData(response.items);
    };
    getitems();
  }, []);

  return (
    <div id="about" className="mt-20 text-center">
      <h2 className="font-bold inline-block half-underline uppercase">On treandng NEWS</h2>
      <Fade>
        <p className="mt-4">
          Be informed about upcoming and on treanding events, here is just like
          our dashboard for important up to date events.
        </p>
      </Fade>

      <Zoom scale={0.4}>
        {data &&
          data.map((each, index) => (
            <div key={index} className="mt-8 mx-auto py-4 h-[75vh] rounded-2xl">
              <img
                src={each.fields.featuredImage.fields.file.url}
                alt="news featured image"
                className="w-full max-h-[40vh] rounded-t-xl"
              />
              <div className="flex flex-col text-center bg-blue-100 border-slate-500 dark:bg-glassmorphism shadow-lg dark:shadow-gray-700 shadow-primary-500 pb-4 rounded-b-md">
                <div className="flex flex-col p-2">
                  <p className="font-bold mt-4">
                    {" "}
                    {each.fields.tItle}
                  </p>
                  <p style={{color: 'green'}} className="font-bold uppercase">
                    {each.fields.eventDate &&
                      moment(each.fields.eventDate).fromNow()}{" "}
                  </p>
                </div>
                <Button style={{marginBottom: '10px'}} className="bg-gradient-to-br from-green-600 to-blue-300 rounded-md block mx-auto mt-2 text-black">
                  <Link href={`/news/${each.sys.id}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
      </Zoom>
    </div>
  );
};

export default News;

//   spaceID

/*
<div className="flex flex-col mt-4">
        <Image src={hero} alt="news" className="w-full h-[40vh] rounded-t-md" />
        
      </div>
*/
