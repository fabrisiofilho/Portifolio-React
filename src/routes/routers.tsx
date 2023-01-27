import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { About } from "../pages/about/about";
import { Projects } from "../pages/projects/projects";
import { Articles } from "../pages/articles/articles";
import { Contact } from "../pages/contact/contact";

export const routers = createBrowserRouter([
    {
        path: "",
        element: <Home />,
        children: [
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },            {
                path: "/articles",
                element: <Articles/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }]
)