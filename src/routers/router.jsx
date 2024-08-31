import { createBrowserRouter } from "react-router-dom";
import { commonPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: commonPage.loginPage,
  },
]);

export default router;
