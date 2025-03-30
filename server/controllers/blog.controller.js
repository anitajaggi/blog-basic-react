import Blog from "../models/blog.model.js";
// import moment from "moment-timezone";

export const createBlog = async (req, res) => {
  try {
    const { date, title, author, category, shortcontent, longcontent } =
      req.body;

    const photo = req.file ? req.file.path : null;

    // const parsedDate = moment.tz(date, "DD-MM-YYYY", "Asia/Kolkata");
    // if (!parsedDate.isValid()) {
    //   return res
    //     .status(400)
    //     .json({ error: "Invalid date format. Use DD-MM-YYYY." });
    // }

    const newblog = new Blog({
      photo: photo
        ? `${req.protocol}://${req.get("host")}/${photo.replace(/\\/g, "/")}`
        : null,
      // date: parsedDate.toDate(),
      date: date,
      title: title,
      author: author,
      category: category,
      shortcontent: shortcontent,
      longcontent: longcontent,
    });

    await newblog.save();
    return res.status(201).json({ message: "Blog created successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: true });
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch Blogs!" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { blogDelId } = req.params;
    const blog = await Blog.findById(blogDelId);

    if (!blog) return res.status(404).json({ message: "Blog not found!" });

    blog.status = false;
    await blog.save();
    return res.json({ blog });
  } catch (error) {
    return res.status(500).json({ error: "Server Error" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { date, title, author, category, shortcontent, longcontent } =
      req.body;
    const photo = req.file ? req.file.path : null;
    const { blogId } = req.params;
    const blog = await Blog.findByIdAndUpdate(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    blog.photo = photo
      ? `${req.protocol}://${req.get("host")}/${photo.replace(/\\/g, "/")}`
      : blog.photo;
    blog.date = date || blog.date;
    blog.title = title || blog.title;
    blog.author = author || blog.author;
    blog.category = category || blog.category;
    blog.shortcontent = shortcontent || blog.shortcontent;
    blog.longcontent = longcontent || blog.longcontent;

    // console.log(blog);

    await blog.save();

    return res
      .status(200)
      .json({ message: "Blog updated successfully", data: blog });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Failed to update blog!" });
  }
};
