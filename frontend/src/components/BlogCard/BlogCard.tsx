import React from "react";
import Avatar from "../Avatar/Avatar";

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
        <Avatar authorName={authorName} />
        <span className="font-semibold">{authorName}</span>
        <span className="font-semibold text-zinc-400">{publishedDate}</span>
      </p>
      <h2 className="text-3xl font-extrabold py-2">{title}</h2>
      <p className="text-lg">{content.slice(0, 100) + "..."}</p>
    </article>
  );
};

export default BlogCard;
