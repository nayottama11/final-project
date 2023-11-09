import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Category from "./pages/Category";
import Promo from "./pages/Promo";
import UserDetail from "./pages/UserDetail";
import Navbar from "./components/Navbar";
import Admin from "./pages/admin";
import { useRoutes } from "react-router";
import "./App.css";
import ProtectedRoute from "./routes/ProtectedRoute";

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Homepage />
      </ProtectedRoute>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/user", element: <User /> },
  { path: "/category", element: <Category /> },
  { path: "/promo", element: <Promo /> },
  { path: "/admin", element: <Admin /> },
  {
    path: "/detail/:userId",
    element: (
      <ProtectedRoute>
        <UserDetail />
      </ProtectedRoute>
    ),
  },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
