import Signin from "./signin";
import Dashboard from "./dashboard";
import Categories from "./categories";
import CreateCategories from "./categories/Create";
import Todo from "./todo-list";

export const commonPage = {
  loginPage: <Signin />,
  todoPage: <Todo />,
};

export const privatePage = {
  dashboardPage: <Dashboard />,
  categoriesPage: <Categories />,
  createCategoriesPage: <CreateCategories />,
};
