import React from "react";
import BlogCard from "../BlogCard/BlogCard";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <BlogCard
        authorName="jay rajput"
        title="this is a random title"
        content="this is a random content body"
        publishedDate="Dec 3, 2023"
      />
      <BlogCard
        authorName="jay rajput"
        title="this is a random title"
        content="this is a random content body"
        publishedDate="Dec 3, 2023"
      />
    </div>
  );
};

export default Blogs;
