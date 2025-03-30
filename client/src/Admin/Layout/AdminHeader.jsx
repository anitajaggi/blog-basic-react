import { FaBarsStaggered } from "react-icons/fa6";

export const AdminHeader = ({ toggleSidebar }) => {
  return (
    <header className="admin-header px-4">
      <FaBarsStaggered className="toggle-btn" onClick={toggleSidebar} />
    </header>
  );
};
