import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import Home from './pages/Home'
import Signup from './pages/Signup'
import AllPosts from './pages/Allposts'
import {Protected} from './components/index.js'
import Login from './pages/Login'
import AddPost from './pages/Addpost'
import EditPost from './pages/Editpost'
import Post from './pages/Post'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element:  (
                    <Home />
            ),
        },
        {
            path: "/login",
            element: (
                <Protected authentication={false}>
                    <Login />
                </Protected>
            ),
        },
        {
            path: "/signup",
            element: (
                <Protected authentication={false}>
                    <Signup />
                </Protected>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Protected authentication>
                    <AllPosts />
                </Protected>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Protected authentication>
                    <AddPost />
                </Protected>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Protected authentication>
                    <EditPost />
                </Protected>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
)
