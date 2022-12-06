import React, {useContext, useEffect, useState} from 'react';
import './styles/App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";
import PostIdPage from "./pages/PostIdPage";
import Loader from "./components/UI/Loader/Loader";
import Login from "./pages/Login";
import {AuthContext} from "./context";

const privateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/about",
                element: <About/>,
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
        element: <Main/>,
        errorElement: <Login/>
    },
    {
        path: "/:",
        element: <Login/>
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
