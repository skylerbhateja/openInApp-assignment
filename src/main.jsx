import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignIn from "./routes/sign-in/SignIn.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import WithSidebar from "./components/WithSidebar.jsx";
import Upload from "./routes/upload/Upload.jsx";
import { AppContextProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/upload",
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
    <GoogleOAuthProvider clientId="972281317965-jrm9jlst5bg3p56jfn7nh50g8d489geg.apps.googleusercontent.com">
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
