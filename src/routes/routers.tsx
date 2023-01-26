import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { About } from "../pages/about/About";
import { Projects } from "../pages/projects/Projects";
import { Articles } from "../pages/articles/Articles";
import { Contact } from "../pages/contact/Contact";

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