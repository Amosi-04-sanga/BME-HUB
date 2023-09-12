"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import Thread from "../models/thread.model";
import { connectToDB } from "../mongoose";
import { FilterQuery, SortOrder } from "mongoose";

interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  path: string;
  image: string;
}

export async function updateUser({
  userId,
  username,
  name,
  bio,
  image,
  path,
}: Params): Promise<void> {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        image,
        bio,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`failed to create/update new user ${error}`);
  }
}

export const fetchUser = async (userId: string) => {
  try {
    connectToDB();
    return User.findOne({ id: userId });
    //.populate({
    //  path: "communities",
    //  model: "community",
    // });
  } catch (error: any) {
    throw new Error(`something went wrong ${error}`);
  }
};

export const fetchPosts = async (pageNumber = 1, pageSize = 20) => {
  connectToDB();

  const skipAmount = (pageNumber - 1) * pageSize;

  // TODO: function to fetch posts from database...
  const postQuery = Thread.find({ parentId: { $in: [undefined, null] } })
    .sort({ createdAt: "desc" })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({ path: "author", model: User })
    .populate({
      path: "children",
      populate: {
        path: "author",
        model: User,
        select: "_id name parentId image",
      },
    });

  const totalPostsCount = Thread.countDocuments({
    parentId: { $in: [undefined, null] },
  });
  const posts = await postQuery.exec();
  const isNext = (await totalPostsCount) > skipAmount + posts.length;
  return { posts, isNext };
};

export const fetchThreadById = async (id: string) => {
  connectToDB();

  try {
    const thread = await Thread.findById(id)
      .populate({
        path: "author",
        model: User,
        select: "_id id name image",
      })
      .populate({
        path: "children",
        populate: [
          {
            path: "author",
            model: User,
            select: "_id id name parentId image",
          },
          {
            path: "children",
            model: Thread,
            populate: {
              path: "author",
              model: User,
              select: "_id id name parentId image",
            },
          },
        ],
      })
      .exec();

    return thread;
  } catch (error) {
    throw new Error(`ERROR in fetching thread by id: ${error}`);
  }
};

export const addCommentToThread = async (
  commentText: string,
  threadId: string,
  userId: string,
  path: string
) => {
  connectToDB();

  try {
    const originalThread = await Thread.findById(threadId);
    if (!originalThread) {
      throw new Error("THREAD not found!");
    }
    const commentThread = new Thread({
      text: commentText,
      author: userId,
      parentId: threadId,
    });
    const savedCommentThread = await commentThread.save();
    originalThread.children.push(savedCommentThread._id);
    await originalThread.save();
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`ERROR in creating comments: ${error.message}`);
  }
};

export const fetchUserPosts = async (userId: string) => {
  connectToDB();

  try {
    // TODO: populate community
    const threads = await User.findOne({ id: userId }).populate({
      path: "threads",
      model: Thread,
      populate: {
        path: "children",
        model: Thread,
        populate: {
          path: "author",
          model: User,
          select: "name image id",
        },
      },
    });

    return threads;
  } catch (error: any) {
    throw new Error(`ERROR in fetching user threads: ${error.message}`);
  }
};

export const fetchUsers = async ({
  userId,
  sortBy = "desc",
  searchString = "",
  pageNumber = 1,
  pageSize = 20,
}: {
  userId: string;
  sortBy?: SortOrder;
  searchString?: string;
  pageNumber?: number;
  pageSize?: number;
}) => {
  try {
    connectToDB();

    const skipAmount = (pageNumber - 1) * pageSize;
    const regex = new RegExp(searchString, "i");

    const query: FilterQuery<typeof User> = {
      id: { $ne: userId },
    };

    if (searchString !== "") {
      query.$or = [
        { username: { $regex: regex } },
        { name: { $regex: regex } },
      ];
    }

    const sortOptions = { createdAt: sortBy };
    const users = await User.find(query)
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize)
      .exec();

    const totalUsersCount = await User.countDocuments(query);
    const isNext = totalUsersCount > skipAmount + users.length;
    return { users, isNext };
  } catch (error: any) {
    throw new Error(`ERROR in fetching users: ${error.message}`);
  }
};

export const getActivities = async (userId: string) => {
  try {
    connectToDB();
    // find all threads created by user
    const userThreads = await Thread.find({ author: userId });
    // collect all thread ids
    const childThreadsIds = userThreads.reduce((acc, userThreads) => {
      return acc.concat(userThreads.children)
    }, []);

    const replies = await Thread.find({
      _id: {$in: childThreadsIds},
      author: {$ne: userId}
    }).populate({
      path: 'author',
      model: User,
      select: '_id name image'
    })
   return replies
  } catch (error: any) {
    throw new Error(`ERROR in getting activities: ${error.message}`);
  }
};
