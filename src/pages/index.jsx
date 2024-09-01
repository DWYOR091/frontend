import Signin from "./signin";
import Dashboard from "./dashboard";
import Categories from "./categories";
import CreateCategories from "./categories/Create";

export const commonPage = {
  loginPage: <Signin />,
};

export const privatePage = {
  dashboardPage: <Dashboard />,
  categoriesPage: <Categories />,
  createCategoriesPage: <CreateCategories />,
};
