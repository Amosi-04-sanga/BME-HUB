"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { addCommentToThread } from "@/lib/actions/user.actions";
import { commentValidation, postValidation } from "@/lib/validation/post";
import { Textarea } from "../ui/textarea";
import { Fade } from "react-awesome-reveal";

interface props {
  threadId: string;
  currentUserId: string;
  currentUserImg: string;
  currentUserName: string;
}

const Comment = ({
  threadId,
  currentUserId,
  currentUserImg,
  currentUserName,
}: props) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(commentValidation),
    defaultValues: {
      post: "",
      image: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof commentValidation>) => {
    await addCommentToThread(
      values.post,
      threadId,
      JSON.parse(currentUserId),
      pathname
    );

    form.reset();
  };

  return (
    <>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="comment-form "
          >
            <FormField
              control={form.control}
              name="post"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 w-full">
                  <FormLabel className="text-base-semibold text-light-2">
                    <div className="flex gap-4 items-center justify-end">
                      <div className=" w-14 h-14 rounded-full">
                        <img
                          src={currentUserImg}
                          alt="profile photo"
                          className="rounded-full w-full h-full"
                        />
                      </div>
                      <p> {currentUserName} </p>
                    </div>
                  </FormLabel>
                  <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                    <Textarea
                      rows={4}
                      placeholder="comment..."
                      className="no-focus text-indigo-300 outline-none p-4 rounded-xl"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-primary-500 mx-auto block mt-2 "
            >
              Reply
            </Button>
          </form>
        </Form>
    </>
  );
};

export default Comment;
