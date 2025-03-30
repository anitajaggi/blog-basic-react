import { HomeBanner } from "../components/Ui/HomeBanner";
import { BlogCard } from "../components/Ui/BlogCard";
import { NewsLetter } from "../components/Ui/NewsLetter";
import { getBlogs } from "../api/api";
import { useEffect, useState } from "react";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const allblogs = async () => {
    const res = await getBlogs();
    setBlogs(res);
  };

  useEffect(() => {
    allblogs();
  }, []);
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <HomeBanner />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-4">
            <h3>
              <u>Latest Blogs</u>
            </h3>
          </div>
        </div>
        <div className="row">
          <BlogCard curElem={blogs} />
        </div>
      </div>
      <NewsLetter />
    </main>
  );
};
