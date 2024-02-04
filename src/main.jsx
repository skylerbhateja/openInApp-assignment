import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignIn from "./routes/sign-in/SignIn.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import WithSidebar from "./components/WithSidebar.jsx";
import Upload from "./routes/upload/Upload.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <WithSidebar>
        <Upload />
      </WithSidebar>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
