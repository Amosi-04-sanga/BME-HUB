"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { userValidation } from "@/lib/validation/user";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { usePathname, useRouter } from "next/navigation";
import { updateUser } from "@/lib/actions/user.actions";


interface Props {
  user: {
    id: string;
    name: string;
    username: string;
    bio: string;
    image: string;
  };
}

const AccountProfile = ({ user }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  const router = useRouter();
  const pathname = usePathname();


  const form = useForm<z.infer<typeof userValidation>>({
    resolver: zodResolver(userValidation),
    defaultValues: {
      profile_image: user?.image || "",
      name: user?.name || "",
      username: user?.username || "",
      bio: user?.bio || "",
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

  async function onSubmit(values: z.infer<typeof userValidation>) {
    const blob = values.profile_image;
    const hasImageChanged = isBase64Image(blob);
    // for selected image
    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].url) {
        values.profile_image = imgRes[0].url;
      }
    }

    // UPDATE | CREATE THE USER
    await updateUser({
        name: values.name,
        username: values.username,
        image: values.profile_image,
        userId: user.id,
        bio: values.bio,
        path: pathname,
      });

    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/community");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-xs:p-2 p-4"
      >
        <FormField
          control={form.control}
          name="profile_image"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="w-16 h-14 rounded-[50%] bg-blue-100 flex items-center justify-center">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile photo"
                    width={96}
                    height={96}
                    className="object-contain rounded-full"
                    priority
                  />
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
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  className="bg-blue-100 outline-none border-none"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-base-semibold text-light-1">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="bg-blue-100 outline-none border-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-base-semibold text-light-1">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="bg-blue-100 outline-none border-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-base-semibold text-light-1">
                Bio
              </FormLabel>
              <FormControl className="focus:outline-none">
                <Textarea
                  rows={10}
                  className="bg-blue-100 outline-none border-none"
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
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;