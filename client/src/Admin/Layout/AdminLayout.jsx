import "./AdminCss.css";
import "../admin.css";
import { Outlet } from "react-router-dom";
import { AdminHeader } from "./AdminHeader";
import { SideBar } from "./Sidebar";
import { useState } from "react";

export const AdminLayout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };
  return (
    <div className={`d-flex flex-md-row`}>
      {isSidebarVisible && <SideBar isSidebarVisible={isSidebarVisible} />}
      <div className="w-100 admin-main">
        <AdminHeader toggleSidebar={toggleSidebar} />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
