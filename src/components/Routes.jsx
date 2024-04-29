import { createBrowserRouter } from "react-router-dom";
import Results from "./Results";
import Images from "./Images";
import Home from "../pages/Home";
import Videos from "./Videos";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <Results/>,
      }, 
      {
        path: "/images",
        element: <Images />
      },
      {
        path: "/videos",
        element: <Videos />
      }
    ],
    errorElement: <><h1 className="text-gray-500 text-4xl text-center">404! Nothing Found!</h1></>
  }
]);
