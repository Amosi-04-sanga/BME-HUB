"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { close } from "@/public/assets";
import Image from "next/image";


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
          setData(entry.fields.image[0]);
        })
        .catch(console.error);
    };
    getitems();
  }, []);
  

  return (
    <div>
      <div className="fixed z-20 top-4 left-4 flex items-center">
        <Button
          onClick={() => router.back()}
          className="px-4 sticky top-0 bg-slate-500 rounded-md mt-4 ml-4"
        >
          <Image src={close} alt="close menu" width={20} height={20} />
        </Button>
      </div>

      {data ? (
        <div className="fixed top-20 mx-auto left-0 w-screen max-full bg-blue-500">
          <div className="pb-4">
            <img
              src={data.fields.file.url}
              alt="user photo"
              style={{ maxHeight: "80vh" }}
              className="max-w-full"
            />
            <p className="text-center p-2"> {data.fields.description} </p>
           
          </div>
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
