import { useRoutes } from "react-router-dom";
import HomePage from "./Home";
import BasketPage from "./Basket";
import OrderPage from "./Order";
import Layout from "@/components/Layout";

const Pages = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "basket",
          element: <BasketPage />,
        },
        {
          path: "order",
          element: <OrderPage />,
        },
      ],
    },
  ]);

  return routes;
};

export default Pages;
