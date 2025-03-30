import { useEffect, useState } from "react";
import { delSubscriber, getNewsLetter } from "../../api/api";
import { MdRestoreFromTrash } from "react-icons/md";

export const NewsLetter = () => {
  const [subs, setSubs] = useState([]);
  useEffect(() => {
    fetchSubs();
  }, []);

  const fetchSubs = async () => {
    const subsData = await getNewsLetter();
    setSubs(subsData);
  };

  const handleDelete = async (subDelId) => {
    if (window.confirm("Are you sure you want to remove this subscriber")) {
      try {
        await delSubscriber(subDelId);
        fetchSubs();
      } catch (error) {
        alert("Somthing went wrong!");
      }
    }
  };

  return (
    <main className="main-div">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>#Sr.</th>
                    <th>Email</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subs?.map((curElem, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{curElem.email}</td>
                        <td className="text-center">
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
