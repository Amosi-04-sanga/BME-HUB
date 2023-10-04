"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import moment from "moment";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const page = ({ params }) => {
  const [data, setData] = useState(null);
  const router = useRouter()
  const entry_id = params.id;


  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: `kdi2o0v2k0w9`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `4cs4zrA7stGMhhnyl9HGW6wRi6GrC6mFYuwuolTcXuA`,
      });

      client
        .getEntry(entry_id)
        .then((entry) => {
          setData(entry);
          // console.log(entry)
        })
        .catch(console.error);
    };
    getitems();
  }, []);

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { title, file } = node.data.target.fields;
        const imageUrl = file.url;
        const altText = title || "";

        return (
          <img
            className="max-w-[60vw] mx-auto my-2"
            src={imageUrl}
            alt={altText}
          />
        );
      },
      "embedded-entry-block": (node) => {
        // Handle other embedded entries, e.g., links to other Contentful content.
        // You can customize the rendering for different content types here.
        return null;
      },
      text: (
        text
      ) => {
        // You can style text nodes here, e.g., adding CSS classes for headings.
        return <p>{text}</p>;
      },
      "heading-1": (node) => (
        <h1 className="text-center text-heading1-bold">
          {node.content[0].value}
        </h1>
      ),
      "heading-2": (node) => (
        <h2 className="text-center text-heading2-bold">
          {node.content[0].value}
        </h2>
      ),
      "heading-3": (node) => (
        <h3 className="text-heading3-bold text-center">
          {node.content[0].value}
        </h3>
      ),
      // Add more heading levels as needed.
      hyperlink: (node) => (
        <Link className="text-red-700" href={node.data.uri}>
          {node.content[0].value}
        </Link>
      ),
    },
  };

  return (
    <div className="block w-[95vw]">
      <Button onClick={ () => router.back() } className="px-4 sticky top-0 bg-gradient-to-br text-[12px] from-green-600 to-blue-300 rounded-md mt-8 ml-4 text-black">
        Back
      </Button>
      

      {data ? (
        <div className=" mx-auto w-[80vw] ml-4">
          <section className="mt-10">
            <h1 className="uppercase font-bold text-center text-heading2-bold">
              {" "}
              {data.fields.tItle}{" "}
            </h1>
            <div className="flex gap-4 justify-between text-small-regular mt-2">
              <div>
                <p className="italic">
                 Published On: {moment(data.fields.publishedDate).format("MMM Do YYYY")}{" "}
                </p>
              </div>
              <p>
                <span className="font-bold text-blue-700 uppercase text-[17px] ">
                  {data.fields.eventDate && (
                    <>
                      {moment(data.fields.eventDate).fromNow()}{" "}
                      <span className="text-black capitalize">Later</span>
                    </>
                  )}
                </span>{" "}
              </p>
            </div>
            <img
              src={data.fields.featuredImage.fields.file.url}
              alt="featured image"
              className="w-full max-h-[60vh] mt-10"
            />

            <div className="mt-4">
              {documentToReactComponents(data.fields.content, options)}
            </div>

            <p className="mt-8 mb-4 text-center">Thanks for your time 🙏</p>
          </section>
        </div>
      ) : (
        <h3 className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-Bold">
          BME...
        </h3>
      )}
    </div>
  );
};

export default page;

/*


const client = contentful.createClient({
  space: '<space_id>',
  environment: '<environment_id>', // defaults to 'master' if not set
  accessToken: '<content_delivery_api_key>'
})

client.getEntry('<entry_id>')
.then((entry) => console.log(entry))
.catch(console.error)

*/
