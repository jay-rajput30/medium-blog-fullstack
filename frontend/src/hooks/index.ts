import { useEffect, useState } from "react";
import axios from "axios";
import { BlogType } from "./hooks.types";

export const useFetch = (url: string) => {
  const [data, setData] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        setData(res.data.data);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return { data, loading };
};

export const useBlog = (url: string) => {
  const [data, setData] = useState<BlogType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        setData(res.data.data);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return { data, loading };
};
