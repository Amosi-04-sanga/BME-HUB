"use server";
import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import User from "../models/user.model";

interface params {
  text: string;
  author: string;
  image: string;
  path: string;
}

export const createThread = async ({
  text,
  author,
  path,
  image,
}: params) => {
  try {
    const createdThread = await Thread.create({
      image,
      text,
      author,
    });

    const Author = await User.findById(author);
    Author.threads.push(createdThread._id);
    await Author.save();

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
};
