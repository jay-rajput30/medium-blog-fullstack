import React from "react";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <article className="w-full border-cyan-700 border-solid border p-1">
      <p className="flex gap-8 items-center">
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {authorName.split(" ")[0][0].toUpperCase() +
              "" +
              authorName.split(" ")[1][0].toUpperCase()}
          </span>
        </div>
        <span className="font-semibold">{authorName}</span>
        <span className="font-semibold text-zinc-400">{publishedDate}</span>
      </p>
      <h2 className="text-3xl font-extrabold py-2">{title}</h2>
      <p className="text-lg">{content.slice(0, 100) + "..."}</p>
    </article>
  );
};

export default BlogCard;
