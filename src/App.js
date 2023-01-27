import React, {useContext, useEffect, useState} from 'react';
import './styles/App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main/Main";
import Posts from "./pages/Posts/Posts";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import PostIdPage from "./pages/PostIdPage/PostIdPage";
import Login from "./pages/Login/Login";
import {AuthContext} from "./context";
import ArticleService from "./API/ArticleService";
import BlogService from "./API/BlogService";
import useIsMobile from "./hooks/useIsMobile";

const privateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Main/>,
            },
            {
                path: "/news",
                element: <Posts service={ArticleService} key="news" />,
            },
            {
                path: "/news/:postId",
                element: <PostIdPage service={ArticleService} key="news"/>,
            },
            {
                path: "/blog",
                element: <Posts service={BlogService} key="blog"/>,
            },
            {
                path: "/blog/:postId",
                element: <PostIdPage service={BlogService} key="blog"/>,
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
]);

const publicRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Login/>,
        children: [
            {
                path: "/",
                element: <Login/>,
            },
            {
                path: "*",
                element: <Login/>,
            },
        ]
    }
]);

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth, isMobile
        }}>
            <RouterProvider router={isAuth ? privateRouter : publicRouter}/>
        </AuthContext.Provider>
    )
}

export default App;
