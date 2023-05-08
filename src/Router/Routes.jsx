
import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import AddCoffees from "../components/AddCoffees/AddCoffees";
import ViewCoffee from "../components/ViewCoffee/ViewCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch('http://localhost:5000/coffees')
  },
  {
    path: 'coffees',
    element: <AddCoffees></AddCoffees>
  },
  {
    path: 'coffees/:id',
    element: <ViewCoffee></ViewCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path: 'update/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
  }
]);