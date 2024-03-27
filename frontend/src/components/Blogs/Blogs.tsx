import BlogCard from "../BlogCard/BlogCard";
import Navbar from "../Navbar/Navbar";
import { useFetch } from "../../hooks";
import { BACKEND_URL } from "../../configs/config";

type Props = {};

const Blogs = (props: Props) => {
  const { loading, data } = useFetch(`${BACKEND_URL}/api/v1/post/bulk`);

  return (
    <div className="max-w-xl lg:mx-auto">
      <Navbar />
      <div className="flex flex-col lg:content-center gap-6 lg:max-w-xl lg:mx-auto pt-2 lg:pt-10">
        {data.map(({ id, content, title, author: { name } }) => {
          return (
            <BlogCard
              key={id}
              id={id}
              content={content}
              title={title}
              authorName={name}
              publishedDate="Dec 3, 2023"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
