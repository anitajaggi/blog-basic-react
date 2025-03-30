import { useEffect, useState } from "react";
import { delMessage, getMessages } from "../../api/api";
import { MdEditSquare, MdRestoreFromTrash } from "react-icons/md";

export const Messages = () => {
  const [allMessages, setAllMessages] = useState([]);
  const fetchMessages = async () => {
    const res = await getMessages();
    setAllMessages(res);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (msgDelId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await delMessage(msgDelId);
        fetchMessages();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="main-div">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>#Sr</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Loop through all categories and display them in the table */}
                  {allMessages?.map((curElem, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{curElem.username}</td>
                        <td>{curElem.email}</td>
                        <td>{curElem.phone}</td>
                        <td>{curElem.message}</td>
                        <td className="d-flex gap-3 justify-content-center">
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
        </div>
      </div>
    </main>
  );
};
