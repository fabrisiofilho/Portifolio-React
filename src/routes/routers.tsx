import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { About } from "../pages/about/about";
import { Projects } from "../pages/projects/projects";
import { Articles } from "../pages/articles/articles";
import { Contact } from "../pages/contact/contact";
import { Course } from "../pages/course/course";

export const routers = createBrowserRouter([
    {
        path: "",
        element: <Home />,
        children: [
            {
                path: "",
                element: <About/>
            },
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
            },
            {
                path: "/course",
                element: <Course/>
            }
        ]
    }]
)