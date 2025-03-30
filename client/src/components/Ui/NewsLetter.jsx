import { useState } from "react";
import { createNewsletter } from "../../api/api";

export const NewsLetter = () => {
  const [subs, setAddSub] = useState("");
  const handleInput = (e) => {
    setAddSub(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNewsletter({ email: subs });
      setAddSub("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="newsletter">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-5 m-auto text-center">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control rounded-0"
                name="email"
                value={subs}
                onChange={handleInput}
              />
              <button
                className="btn btn-secondary w-100 rounded-0"
                type="submit"
              >
                SbusCribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
