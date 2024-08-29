import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home/Home'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Cart from './component/Cart/Cart'

import Products from './component/Products/Products'
import Brands from './component/Brands/Brands'
import Categories from './component/Categories/Categories'
import Login from './component/Login/Login'
import Layout from './component/Layout/Layout'
import Register from './component/Register/Register'
import CounterContextProvider from './Context/Context'
import UserContextProvider from './UserContext/UserContext'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Recentproducts from './component/Recentproducts/Recentproducts'
import ProductDetails from './component/Product.Details/ProductDetails'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextprovider from './Context/Cartcountext'
 import {Toaster}from"react-hot-toast"
let query= new QueryClient();
function App() {
  
let createBrowser=createBrowserRouter ([

{path:"" ,element:<Layout/>, children:[
  {index:true,element: <ProtectedRoute><Home/></ProtectedRoute>},
{path:"cart",element:<ProtectedRoute><Cart/></ProtectedRoute>},
{path:"products",element:<ProtectedRoute><Products/></ProtectedRoute>},
{path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
{path:"categories",element:<ProtectedRoute><Categories/></ProtectedRoute>},
{path:"productDetails/:id/:category",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
{path:"Register",element:<Register/>},

{path:"login",element:<Login/>},


]},







])









  return (
    <>
    <QueryClientProvider client={query}>
      <UserContextProvider>  
        <CounterContextProvider>
          <CartContextprovider>
       <ReactQueryDevtools initialIsOpen="false"/>
       <Toaster></Toaster>
        <RouterProvider router={createBrowser}></RouterProvider>
        </CartContextprovider>
        </CounterContextProvider>
</UserContextProvider>
</QueryClientProvider>
    
 



  
    </>
  )
}

export default App
