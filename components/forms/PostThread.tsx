"use client";
import React, { ChangeEvent, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createThread } from "@/lib/actions/thread.action";
import { postValidation } from "@/lib/validation/post";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "../ui/input";

const PostThread = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");

  const form = useForm({
    resolver: zodResolver(postValidation),
    defaultValues: {
      post: "",
      accountId: userId,
      image: ''
    },
  });

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    const filereader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(files));
      if (!file.type.includes("image")) return;

      filereader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };
      filereader.readAsDataURL(file);
    }
  };

  async function onSubmit(values: z.infer<typeof postValidation>) {
    const blob = values.image;
    const hasImageChanged = isBase64Image(blob);
    // for selected image
    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].url) {
        values.image = imgRes[0].url;
      }
    }


    await createThread({
      text: values.post,
      author: userId,
      image: values.image,
      path: pathname,
    });

    router.push("/community");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 mt-12"
      >
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center gap-4">
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  className="bg-blue-100 outline-none border-none"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
              <FormLabel className="w-full rounded-[50%] flex items-center justify-center">
                {field.value ? (
                  <img src={field.value} className="w-full h-[40vh] xs:h-[50vh]  sm:h-[60vh]" alt="post image" />
                ) : (
                  <Image
                    src="/assets/community/profile.svg"
                    alt="profile photo"
                    width={96}
                    height={96}
                    className="object-contain rounded-full"
                  />
                )}
              </FormLabel>
              
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="post"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 w-full">
              <FormLabel className="text-base-semibold">Content</FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Textarea rows={10} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-primary-500">
          POST THREAD
        </Button>
      </form>
    </Form>
  );
};

export default PostThread;
