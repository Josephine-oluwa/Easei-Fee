import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import Reminders from "../pages/Reminders";
import MyClients from "../pages/MyClient";
import Dashboard from "../pages/Dashboard";



export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
          
            {
                index: true,
              path: "/",
                element: <Reminders/>
            },
            {
                index: true,
                path: "my-client",
                element: <MyClients/>
            },
            {
                path: "dashboard",
                element: <Dashboard/>
            },
            {
                path: "*",
                element: <Error/>
            },
        ]
    }
])

export default mainRoute