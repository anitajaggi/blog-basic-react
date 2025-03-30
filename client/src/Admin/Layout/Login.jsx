import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";

export const Login = ({ setAuth }) => {
  // Accept setAuth as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(email, password);

      if (data.message === "Login successful") {
        localStorage.setItem("isAuthenticated", "true");
        setAuth(true); // Update authentication state
        navigate("/admin"); // Redirect to dashboard
      }
    } catch (err) {
      setError(err.error || "Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4">
            <h3 className="text-center">Login</h3>
            {error && <p className="text-danger text-center">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-secondary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
