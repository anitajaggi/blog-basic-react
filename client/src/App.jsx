import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Frontend pages
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./Pages/Home";
import { Blog } from "./Pages/Blogs";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { BlogDetails } from "./Pages/BlogDetails";

// Admin panel pages
import { AdminLayout } from "./Admin/Layout/AdminLayout";
import { Dashboard } from "./Admin/Pages/Dashboard";
import { AddBlogs } from "./Admin/Pages/AddBlogs";
import { Category } from "./Admin/Pages/Category";
import { Messages } from "./Admin/Pages/Messages";
import { NewsLetter } from "./Admin/Pages/Newsletter";
import { Login } from "./Admin/Layout/Login";

import { NotFound } from "./components/Layout/NotFound";
import { Privacy } from "./Pages/Privacy";
import { Terms } from "./Pages/Terms";

const App = () => {
  const [isAuthenticated, setAuth] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Update authentication state when localStorage changes
  useEffect(() => {
    setAuth(localStorage.getItem("isAuthenticated") === "true");
  }, []);

  // Define routes inside the component to update when `isAuthenticated` changes
  const router = createBrowserRouter([
    // Frontend routes
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "blog", element: <Blog /> },
        { path: "policy", element: <Privacy /> },
        { path: "terms", element: <Terms /> },
        { path: "blogdetails/:slug", element: <BlogDetails /> },
      ],
    },
    // Admin panel routes (protected)
    {
      path: "/admin",
      element: isAuthenticated ? <AdminLayout /> : <Login setAuth={setAuth} />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "addblog", element: <AddBlogs /> },
        { path: "category", element: <Category /> },
        { path: "messages", element: <Messages /> },
        { path: "newsletter", element: <NewsLetter /> },
      ],
    },
    // Admin login page
    {
      path: "/admin/login",
      element: isAuthenticated ? <Dashboard /> : <Login setAuth={setAuth} />,
    },

    // Catch-all for unknown routes
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
