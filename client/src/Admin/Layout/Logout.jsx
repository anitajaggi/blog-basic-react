import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/admin", { replace: true });
    window.location.reload();
  };

  return (
    <li className="mx-3 mt-2 logout" onClick={handleLogout}>
      Logout
    </li>
  );
};
