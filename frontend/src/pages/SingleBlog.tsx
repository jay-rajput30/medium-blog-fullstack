import { useParams } from "react-router-dom";
import SingleBlogAuthorDetails from "../components/SingleBlogAuthorDetails/SingleBlogAuthorDetails";
import SingleBlogContentDetails from "../components/SingleBlogContentDetails/SingleBlogContentDetails";
import { BACKEND_URL } from "../configs/config";
import { useBlog } from "../hooks";

type Props = {};

const SingleBlog = (props: Props) => {
  const { id } = useParams();
  const { data, loading } = useBlog(`${BACKEND_URL}/api/v1/post/${id}`);

  console.log({ data, loading });
  return (
    <div>
      <SingleBlogAuthorDetails blog={data} />
      <SingleBlogContentDetails blog={data} />
    </div>
  );
};

export default SingleBlog;
