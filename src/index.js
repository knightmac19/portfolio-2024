import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import App from "./App";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "Portfolio",
        element: <Portfolio />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Resume",
        element: <Resume />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
