"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactValidation } from "@/lib/validation/contact";
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
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactValidation>>({
    resolver: zodResolver(contactValidation),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactValidation>) => {
    //e.preventDefault()
    console.log(values);
  };

  const onSubscribe = (values: z.infer<typeof subscribersValidation>) => {
    console.log(values);
  };

  return (
    <section className="mt-20 flex flex-col">
      <div className="text-center mt-4">
        <h2 className="half-underline inline-block font-bold">CONTACT US</h2>
      </div>
      <p className="mt-4 text-center">
        Get in touch with our department for questions and more informations BME
        HUB
      </p>
      <div className="mt-8 bg-gradient-to-br from-green-300 to-slate-500 p-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-dark-1">Name</FormLabel>
                  <FormControl className="outline-none">
                    <Input
                      className="outline-none border-none dark:bg-white"
                      placeholder="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-dark-1">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="outline-none border-none dark:bg-white"
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-dark-1">
                    message
                  </FormLabel>
                  <FormControl className="focus:outline-none">
                    <Textarea
                      rows={10}
                      className="outline-none border-none dark:bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-gradient-to-br from-green-600 to-blue-300 rounded-md block mx-auto mt-4 text-black"
            >
              Send
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
