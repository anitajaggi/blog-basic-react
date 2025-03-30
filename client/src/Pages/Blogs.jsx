import { useEffect, useState } from "react";
import { BlogCard } from "../components/Ui/BlogCard";
import { getBlogs } from "../api/api";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const allblogs = async () => {
    const res = await getBlogs();
    setBlogs(res);
  };

  useEffect(() => {
    allblogs();
  }, []);

  return (
    <main className="py-4">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12">
            <h3>Blogs</h3>
          </div>
        </div>
        <div className="row">
          <BlogCard curElem={blogs} />
        </div>
      </div>
    </main>
  );
};
