import Detail from "../features/detail/index.tsx";
import Home from "../features/home/index.tsx";
import Layout from "../components/layout.tsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/detail/:name/:id",
        element: <Detail />,
      },
    ],
  },
]);
