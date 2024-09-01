import Signin from "./signin";
import Dashboard from "./dashboard";
import Categories from "./categories";

export const commonPage = {
  loginPage: <Signin />,
};

export const privatePage = {
  dashboardPage: <Dashboard />,
  categoriesPage: <Categories />,
};
