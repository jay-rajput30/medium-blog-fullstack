import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import Navbar from "../Navbar/Navbar";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="max-w-xl lg:mx-auto">
      <Navbar />
      <div className="flex flex-col lg:content-center gap-6 lg:max-w-xl lg:mx-auto pt-2 lg:pt-10">
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
    </div>
  );
};

export default Blogs;
