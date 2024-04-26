import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FormProvider } from "./contexts/FormProvider.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Page1 from "./pages/Page1.tsx";
import Page2 from "./pages/Page2.tsx";
import Page3 from "./pages/Page3.tsx";
import Page4 from "./pages/Page4.tsx";
import Page5 from "./pages/Page5.tsx";
import Page6 from "./pages/Page6.tsx";
import Page7 from "./pages/Page7.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form1",
    element: <Page1 />,
  },
  {
    path: "/form2",
    element: <Page2 />,
  },
  {
    path: "/form3",
    element: <Page3 />,
  },
  {
    path: "/form4",
    element: <Page4 />,
  },
  {
    path: "/form5",
    element: <Page5 />,
  },
  {
    path: "/form6",
    element: <Page6 />,
  },
  {
    path: "/form7",
    element: <Page7 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormProvider>
      <NavBar />
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>,
);
