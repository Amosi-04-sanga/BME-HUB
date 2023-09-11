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
import { Textarea } from "../ui/textarea";
import { redirect, usePathname, useRouter } from "next/navigation";
import { threadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.action";

const PostThread = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(threadValidation),
    defaultValues: {
      thread: "",
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof threadValidation>) => {
     await createThread({
        text: values.thread,
        author: userId,
        communityId: null,
        path: pathname
     })

     router.push('/')
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 mt-12"
      >
        <FormField
          control={form.control}
          name="thread"
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

