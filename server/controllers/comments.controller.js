import Comment from "../models/comments.model.js"; // Import the Comment model

// Controller function to create a new comment
export const createComment = async (req, res) => {
  try {
    // Extract required fields from request body
    const { username, email, comment, blog_id } = req.body;

    // Validate that all required fields are provided
    if (!username || !email || !comment || !blog_id) {
      return res.status(400).json({
        message:
          "Please provide all required fields: username, email, comment, blog_id",
      });
    }

    // Create a new comment document using the Comment model
    const newComment = new Comment({ username, email, comment, blog_id });

    // Save the new comment to the database
    await newComment.save();

    // Respond with success message and the created comment
    return res
      .status(200)
      .json({ message: "Comment Inserted Successfully", newComment });
  } catch (error) {
    console.log(error); // Log any server errors
    return res.status(500).json({ message: "Error in Server", error }); // Send server error response
  }
};

// Controller function to fetch all comments for a specific blog
export const getCommentsByBlog = async (req, res) => {
  try {
    // Extract blog_id from request parameters
    const { blog_id } = req.params;

    // Find all comments associated with the given blog_id
    const comments = await Comment.find({ blog_id });

    // Respond with the list of comments
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching comments", error }); // Send server error response
  }
};
