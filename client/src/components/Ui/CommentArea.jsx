import { useState, useEffect } from "react";
import { createComment, getComments } from "../../api/api";

// Component to handle comment section
export const CommentArea = ({ blog_id }) => {
  // State to store the list of comments
  const [comments, setComments] = useState([]);

  // State to store form input values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    comment: "",
  });

  // Fetch comments when blog_id changes
  useEffect(() => {
    fetchComments();
  }, [blog_id]);

  // Function to fetch comments from API
  const fetchComments = async () => {
    if (!blog_id) return; // Avoid API call if blog_id is missing

    const data = await getComments(blog_id); // Fetch comments based on blog_id
    setComments(data); // Update state with the fetched comments
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data state
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      await createComment({ ...formData, blog_id }); // Send new comment to API
    } catch (error) {
      console.log(error); // Log any errors
    }

    setFormData({ username: "", email: "", comment: "" }); // Reset form fields
    fetchComments(); // Refresh comments list after submission
  };

  return (
    <>
      <div className="col-md-12">
        <h3>Add Your Comment</h3>
        {/* Comment form */}
        <form
          onSubmit={handleSubmit}
          className="card details-section border-0 rounded-0 p-3"
        >
          <div className="row">
            {/* Name input field */}
            <div className="col-md-6">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="Name"
              />
            </div>
            {/* Email input field */}
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="Email"
              />
            </div>
            {/* Comment text area */}
            <div className="col-md-12">
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="Feedback..."
              ></textarea>
            </div>
            {/* Submit button */}
            <div className="col-md-6">
              <button type="submit" className="btn btn-secondary">
                Send Comment
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Display fetched comments */}
      <div>
        {comments.map((comment) => (
          <div key={comment._id} className="comment">
            <strong>{comment.username}</strong>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};
