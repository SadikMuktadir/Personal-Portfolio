import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/aboutMe",
        element:<AboutMe></AboutMe>,
      },
      {
        path:"/services",
        element:<Services></Services>,
      },
      {
        path:"/skills",
        element:<Resume></Resume>,
      },
      {
        path:"/projects",
        element:<Projects></Projects>,
      },
      {
        path:"/contact",
        element:<Contact></Contact>,
      },
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
