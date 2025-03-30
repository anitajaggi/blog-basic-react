import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const menu = [
    { menu: "Home", link: "/" },
    { menu: "About", link: "/about" },
    { menu: "Blog", link: "/blog" },
    { menu: "Contact", link: "/contact" },
    { menu: "Privacy Policy", link: "/policy" },
    { menu: "Terms & Condition", link: "/terms" },
  ];
  return (
    <footer className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="d-flex align-items-center justify-content-center gap-4">
              {menu.map((curElem, index) => {
                const { menu, link } = curElem;
                return (
                  <li key={index}>
                    <NavLink to={link}>{menu}</NavLink>
                  </li>
                );
              })}
            </ul>
            <ul className="d-flex py-3 align-items-center justify-content-center gap-4">
              <li>
                <NavLink to="/">
                  <FaFacebookSquare />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaXTwitter />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaInstagramSquare />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaYoutube />
                </NavLink>
              </li>
            </ul>
            <p className="text-center mb-0">All Right Reserved!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
