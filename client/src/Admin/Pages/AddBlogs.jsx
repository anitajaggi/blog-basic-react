import { useEffect, useState } from "react";
import { MdEditSquare, MdRestoreFromTrash } from "react-icons/md";
// get api functions
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getCategories,
  updateBlog,
} from "../../api/api";

export const AddBlogs = () => {
  const [ctgry, setCtgry] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogId, setBlogId] = useState(null);
  const [addBlog, setAddBlog] = useState({
    photo: "",
    date: "",
    category: "",
    title: "",
    author: "",
    shortcontent: "",
    longcontent: "",
  });

  useEffect(() => {
    fetchCtgry();
    fetchBlog();
  }, []);

  const fetchCtgry = async () => {
    const res = await getCategories();
    setCtgry(res);
  };

  const fetchBlog = async () => {
    const res = await getBlogs();
    setAllBlogs(res);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setAddBlog({
      ...addBlog,
      [name]: type === "file" ? files[0] : value, // Handle file input correctly
    }); // set all input data to addblog state object
  }; // handle input changes

  const handleForm = async (e) => {
    e.preventDefault();
    const blogData = new FormData();
    Object.entries(addBlog).forEach(([key, value]) => {
      blogData.append(key, value);
    });

    try {
      if (blogId) {
        await updateBlog(blogId, blogData);
        setBlogId(null);
      } else {
        await createBlog(blogData);
      }
    } catch (error) {
      console.log(error);
    }

    setAddBlog({
      photo: "",
      date: "",
      category: "",
      title: "",
      author: "",
      shortcontent: "",
      longcontent: "",
    });

    fetchBlog();

    // for (let pair of blogData.entries()) {
    //   console.log(pair[0] + ": ", pair[1]); // This will show form values correctly
    // }
  };

  const handleEdit = (curElem) => {
    setAddBlog({
      // photo: "",
      // date: curElem.date,
      category: curElem.category,
      title: curElem.title,
      author: curElem.author,
      shortcontent: curElem.shortcontent,
      longcontent: curElem.longcontent,
    });
    setBlogId(curElem._id);
  };

  const handleDelete = async (blogDelId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await deleteBlog(blogDelId);
        fetchBlog();
      } catch (error) {
        alert("Sumthing went wrong");
      }
    }
  };

  return (
    <div className="main-content-area">
      <div className="form-area">
        <div className="card p-2 border-0">
          <h4>
            <u>{blogId ? "Update Blog" : "Add Blogs"}</u>
          </h4>
          <form onSubmit={handleForm} encType="multipart/form-data">
            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="file"
                  name="photo"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="date"
                  name="date"
                  value={addBlog.date}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-2">
                <select
                  name="category"
                  value={addBlog.category}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option>Select Category</option>
                  {ctgry?.map((cat, i) => (
                    <option key={i} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="title"
                  value={addBlog.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="author"
                  value={addBlog.author}
                  onChange={handleChange}
                  placeholder="Author"
                  className="form-control"
                />
              </div>
              <div className="col-md-12 mb-2">
                <textarea
                  name="shortcontent"
                  value={addBlog.shortcontent}
                  onChange={handleChange}
                  rows={3}
                  className="block form-control"
                  placeholder="Short Content..."
                ></textarea>
              </div>
              <div className="col-md-12 mb-2">
                <textarea
                  name="longcontent"
                  value={addBlog.longcontent}
                  onChange={handleChange}
                  rows={8}
                  className="block form-control"
                  placeholder="Long Content..."
                ></textarea>
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  className={`btn ${blogId ? "btn-success" : "btn-secondary"} `}
                >
                  {blogId ? "Update Blog" : "Add Blog"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="table-area mt-2 p-2 table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#Sr.</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Author</th>
              <th scope="col">Short Content</th>
              <th scope="col">Long Content</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allBlogs?.map((curElem, i) => {
              const {
                photo,
                title,
                author,
                category,
                date,
                shortcontent,
                longcontent,
              } = curElem;
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    {photo ? (
                      <img
                        src={photo}
                        alt="User Image"
                        width="100"
                        height="50"
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{category}</td>
                  <td>{title}</td>
                  <td>{date}</td>
                  <td>{author}</td>
                  <td>{shortcontent}</td>
                  <td>{longcontent}</td>
                  <td className="d-flex gap-3 justify-content-center">
                    <button
                      className="btn btn-success"
                      onClick={() => handleEdit(curElem)}
                    >
                      <MdEditSquare style={{ fill: "white" }} />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(curElem._id)}
                    >
                      <MdRestoreFromTrash style={{ fill: "white" }} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
