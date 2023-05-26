import Add from "../pages/Add/Add";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import MainRoot from "../pages/MainRoot";


export const ROUTES = [
  {
    path: "/",
    element: <MainRoot/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/add",
        element: <Add/>,
      },
      {
        path: "/detail/:id",
        element: <Details/>,
      }
    ],
  },
];
