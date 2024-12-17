import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react'

import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import HomePage from './routes/HomePage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import Write from './routes/Write.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



const router = createBrowserRouter([
  {
    element:<MainLayout/>,
    children:[
      {
        path : "/",
        element:
         <HomePage />
        ,
      },
      {
        path:"/posts",
        element:<PostListPage />
      },
      {
        path:"/write",
        element:<Write />
      },
      {
        path:"/login",
        element:<LoginPage />
      },
      {
        path:"/:slug",
        element:<SinglePostPage />
      },
      {
        path:"/register",
        element:<RegisterPage />
      },
      
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
   <RouterProvider  router={router}/>
   </ClerkProvider>

  </StrictMode>,
)
