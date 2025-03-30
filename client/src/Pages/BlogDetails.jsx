import { useLocation, useParams } from "react-router-dom";
import { CommentArea } from "../components/Ui/CommentArea";

export const BlogDetails = () => {
  // const { id } = useParams(); // Get blog ID from URL
  const { slug } = useParams();
  const formattedSlug = slug.replace(/-/g, " "); // Convert dashes back to spaces

  const location = useLocation();
  let blogData = location.state?.curItem;

  // If state is missing, find the blog manually (if you have a blog list)
  if (!blogData) {
    blogData = blogs.find(
      (blog) => blog.title.toLowerCase() === formattedSlug.toLowerCase()
    );
  }

  if (!blogData) {
    return <p>Blog not found.</p>;
  }

  const { _id, photo, title, author, category, date, longcontent } = blogData;

  const formattedDate = new Date(date)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-"); // Convert to DD-MM-YYYY format

  return (
    <main>
      <div className="container details-section">
        <div className="row">
          <div className="col-md-12">
            <div className="details details-section p-2 mt-4">
              <h3>{title}</h3>
              <div className="blog-imgg">
                <img src={photo} alt={title} />
              </div>
              <div className="blog-content">
                <div className="d-flex">
                  <b>{category}</b> &nbsp;/&nbsp; <b>{formattedDate}</b>
                  &nbsp;/&nbsp;
                  <b>{author}</b>
                </div>
                <p>{longcontent}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <CommentArea blog_id={_id} />
        </div>
      </div>
    </main>
  );
};
