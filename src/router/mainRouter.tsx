import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import StartPage from "../page/StartPage";
import CreateGoal from "../page/CreateGoal";
import ViewGoals from "../page/ViewGoals";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <StartPage />,
      },
      {
        index: true,
        path: "/create",
        element: <CreateGoal />,
      },
      {
        index: true,
        path: "/view",
        element: <ViewGoals />,
      },
    ],
  },
]);
