import { NavLink } from "react-router-dom";
import { Logout } from "./Logout";

export const SideBar = () => {
  const sidemenu = [
    { menulink: "/admin", menuname: "Dashboard", exact: true },
    { menulink: "/admin/category", menuname: "Category" },
    { menulink: "/admin/addblog", menuname: "Blogs" },
    { menulink: "/admin/messages", menuname: "Messages" },
    { menulink: "/admin/newsletter", menuname: "Newsletter" },
  ];
  return (
    <aside>
      <div className="admin-logo text-center py-2 border-bottom">
        <h3>Admin-Panel</h3>
      </div>
      <ul className="sidebar-links">
        {sidemenu.map((curLink, i) => {
          const { menuname, menulink, exact } = curLink;
          return (
            <li key={i}>
              <NavLink to={menulink} end={exact}>
                {menuname}
              </NavLink>
            </li>
          );
        })}

        {/* logout */}
        <Logout />
      </ul>
    </aside>
  );
};
