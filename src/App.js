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
                path: "/posts",
                element: <Posts/>,
            },
            {
                path: "/posts/:postId",
                element: <PostIdPage/>,
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
                path: "/about",
                element: <Main/>,
            },
            {
                path: "/posts",
                element: <Login/>
            }
        ]
    }
]);

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth
        }}>
            <RouterProvider router={isAuth ? privateRouter : publicRouter}/>
        </AuthContext.Provider>
    )
}

export default App;
