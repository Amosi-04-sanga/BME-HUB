"use server";
import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import User from "../models/user.model";

interface params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export const createThread = async ({
  text,
  author,
  communityId,
  path,
}: params) => {
  try {
    const createdThread = await Thread.create({
      text,
      author,
      community: null,
    });

    const Author = await User.findById(author);
    Author.threads.push(createdThread._id);
    await Author.save();

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
};
