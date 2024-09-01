import { createBrowserRouter } from "react-router-dom";
import { commonPage, privatePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: commonPage.loginPage,
  },
  {
    path: "/dashboard",
    element: privatePage.dashboardPage,
  },
  {
    path: "/categories",
    element: privatePage.categoriesPage,
  },
]);

export default router;
