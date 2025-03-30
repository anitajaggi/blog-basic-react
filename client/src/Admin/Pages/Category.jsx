import { useEffect, useState } from "react";
import {
  deleteCategory,
  getCategories,
  postCategory,
  updateCategory,
} from "../../api/api";
import { MdEditSquare, MdRestoreFromTrash } from "react-icons/md";

// Component for managing categories
export const Category = () => {
  // State to store the input category name
  const [addCat, setAddCat] = useState("");
  // State to store the list of all categories
  const [allCat, setAllCat] = useState([]);
  // State to track the category being edited
  const [catEditId, setCatEditId] = useState(null);

  // Function to handle input changes
  const handleChange = (e) => {
    setAddCat(e.target.value);
  };

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCat();
  }, []);

  // Function to fetch categories from the API
  const fetchCat = async () => {
    const catData = await getCategories();
    setAllCat(catData);
  };

  // Function to handle form submission (add or update category)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure category name is not empty
    if (addCat.trim() === "") {
      alert("Category cannot be empty!");
      return;
    }

    try {
      if (catEditId) {
        // If editing, update the existing category
        await updateCategory(catEditId, { name: addCat });
        setCatEditId(null); // Reset edit state
      } else {
        // If adding, create a new category
        await postCategory({ name: addCat });
      }
      setAddCat(""); // Clear input field
      fetchCat(); // Refresh category list
    } catch (error) {
      console.log(error);
    }
  };

  // Function to set category details for editing
  const handleEdit = (curElem) => {
    setAddCat(curElem.name); // Set input field with selected category name
    setCatEditId(curElem._id); // Store ID of category being edited
  };

  // Function to delete a category
  const handleDelete = async (catDelId) => {
    // Ask for confirmation before deleting
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await deleteCategory(catDelId);
        fetchCat(); // Refresh category list after deletion
      } catch (error) {
        alert("Category is NOT Deleted!");
      }
    }
  };

  return (
    <main className="main-div">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {/* Heading for form (Edit or Add) */}
            <h4>{catEditId ? "Update Category" : "Add New Category"}</h4>
            {/* Form for adding/updating category */}
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={addCat}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <button
                    type="submit"
                    className={`btn ${
                      catEditId ? "btn-success" : "btn-secondary"
                    }`}
                  >
                    {catEditId ? "Update Category" : "Add Category"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr />
        {/* Table displaying category list */}
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>#Sr</th>
                <th>Category</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through all categories and display them in the table */}
              {allCat?.map((curElem, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{curElem.name}</td>
                    <td className="d-flex gap-3 justify-content-center">
                      {/* Edit button */}
                      <button
                        className="btn btn-success"
                        onClick={() => handleEdit(curElem)}
                      >
                        <MdEditSquare style={{ fill: "white" }} />
                      </button>
                      {/* Delete button */}
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
    </main>
  );
};
