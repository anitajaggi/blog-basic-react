import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="notFoundPage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="notFoundcontent">
              <h1 className="text-danger">Page Not Found!</h1>
              <NavLink to="/">
                <button className="btn btn-secondary mt-2">Go Back</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
