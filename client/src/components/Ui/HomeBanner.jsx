import { NavLink } from "react-router-dom";

export const HomeBanner = () => {
  return (
    <div className="hero-main">
      <div className="row">
        <div className="col-md-6">
          <div className="hero-content">
            <h1>
              Your Source for <br /> Knowledge & Inspiration.
            </h1>
            <p>
              "Explore a world of knowledge with thought-provoking articles,
              expert insights, and inspiring stories. Whether you're here to
              learn something new, gain fresh perspectives, or spark your
              creativity, we bring you content that informs, empowers, and
              motivates."
            </p>
            <b>
              Empowering curious minds with knowledge, inspiration, and fresh
              perspectives every day.
            </b>
            <br />
            <NavLink to="/about" className="btn btn-secondary mt-4 rounded-0">
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
