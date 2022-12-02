import React from 'react';
import './styles/App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";
import PostIdPage from "./pages/PostIdPage";

const router = createBrowserRouter([
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
            }
        ]
    }
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App;
