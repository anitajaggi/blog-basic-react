import { MdSunny } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ToggleTheme";

export const Header = () => {
  const menu = [
    { menu: "Home", link: "/" },
    { menu: "About", link: "/about" },
    { menu: "Blog", link: "/blog" },
    { menu: "Contact", link: "/contact" },
  ];
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header-main d-flex justify-content-between align-items-center">
              <div className="logo">
                <NavLink to={"/"}>
                  <h4>Blogs</h4>
                </NavLink>
              </div>
              <nav className="d-flex gap-3 align-items-center">
                <ul className="d-flex align-items-center gap-3">
                  {menu.map((curElem, index) => {
                    const { menu, link } = curElem;
                    return (
                      <li key={index}>
                        <NavLink to={link}>{menu}</NavLink>
                      </li>
                    );
                  })}
                </ul>
                <div className="toggle-icon">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
