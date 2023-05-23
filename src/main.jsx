import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Header/Header.jsx';
import AllToys from './AllToys/AllToys.jsx';
import MyToys from './MyToys/MyToys.jsx';
import AddToys from './AddToys/AddToys.jsx';
import Blogs from './Blogs/Blogs.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login.jsx';
import SignUp from './SignUp/SignUp.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import NotFound from './NotFound/NotFound.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import ToyDetails from './ToyDetails/ToyDetails.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import UpdateToy from './UpdateToy/UpdateToy.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children:[
      {
        path: '/',
        element: <App></App>
      },
      {
        path: '/AllToys',
        element:<AllToys></AllToys>,
        loader: () => fetch('https://cars-zone-server-side-express-js.vercel.app/totalCars')
      },
      {
        path: '/MyToys',
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: '/AddToys',
        element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
      },
      {
        path: '/Blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/SignUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/ToyDetails/:id',
        element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
        loader: async ({ params }) => { return fetch(`https://cars-zone-server-side-express-js.vercel.app/toys/${params.id}`) },
      },
      { 
        path:'/UpdateToy/:id',
        element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
        loader: ({params})=> fetch(`https://cars-zone-server-side-express-js.vercel.app/toys/${params.id}`)
      }
    ]
  },
  {
    path: "*" ,
    element: <NotFound></NotFound>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router}></RouterProvider></AuthProviders>
  </React.StrictMode>,
)
