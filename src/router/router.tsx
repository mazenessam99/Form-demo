import About from "@/components/About";
import Home from "@/components/Home";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import MainLayout from "@/layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            {path:'/login',element:<LoginForm/>},
            {path:'/register',element:<RegisterForm/>}
        ],
    },

])