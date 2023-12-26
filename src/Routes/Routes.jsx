import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  },
]);
const Routes = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
