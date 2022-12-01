import React from 'react';
import './styles/App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Main from "./pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/posts",
                element: <Posts/>,
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
