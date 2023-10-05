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
  const router = useRouter();
  const entry_id = params.id;

  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: `is678jpe91kq`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `D_CG88-PJG3pvVhj358E3fGQGXc3wU4Z5nQSgxKbn7U`,
      });

      client
        .getEntry(entry_id)
        .then((entry) => {
          setData(entry.fields.images);
        })
        .catch(console.error);
    };
    getitems();
  }, []);

  return (
    <div style={{ margin: "auto" }} className="mx-auto w-full mb-10 p-4">
      <div className="flex items-center">
        <Button
          onClick={() => router.back()}
          className="px-4 sticky top-0 bg-gradient-to-br text-[12px] from-green-600 to-blue-300 rounded-md mt-8 ml-4 text-black"
        >
          Back
        </Button>
      </div>

      {data ? (
        <div className="mx-auto">
          <section
            style={{ display: "flex", flexWrap: "wrap", justifyItems: 'center'}}
            className=" mt-10 mx-auto"
          >
            {data.map((item, index) => (
              <div style={{ margin: "2px" }} className="cursor-pointer" key={index}>
                <img
                  src={item.fields.file.url}
                  alt="photos"
                  style={{ maxWidth: "150px", maxHeight: "150px" }}
                  className="w-full"
                />
              </div>
            ))}
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
