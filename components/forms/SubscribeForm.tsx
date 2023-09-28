"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { subscribersValidation } from "@/lib/validation/subscribers";

const SubscribeForm = () => {
  const form = useForm<z.infer<typeof subscribersValidation>>({
    resolver: zodResolver(subscribersValidation),
    defaultValues: {
      email: "",
    },
  });
  const onSubscribe = (values: z.infer<typeof subscribersValidation>) => {
    console.log(values);
    
  };
  return (
    <div>
      <div className="mt-10">
        <h2 className="mt-4 text-center font-bold">Join Our Newsletter</h2>
        <p className="mt-2">
          Subscribe to stay up to date with the latest Nest updates, features,
          and videos!
        </p>
        <div className="mt-4">
          <div className="mt-8 bg-gradient-to-br from-green-300 to-slate-500 p-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubscribe)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-dark-1">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="border-none dark:bg-white"
                          type="email"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mb-14 bg-gradient-to-br from-green-600 to-blue-300 rounded-md block mx-auto mt-4 text-black">
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
