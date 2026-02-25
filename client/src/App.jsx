// import { useState } from 'react'
// import { Routes,Route } from "react-router-dom"
// import './App.css'
// import Register from './Pages/Register'
// import Login from './Pages/Login'
// import Home from './Pages/Home'
// import Single from './Pages/Single'
// import Write from './Pages/Write'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'

// function App() {
 

//   return (
//     <>
//       <Navbar/>
      
//   <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/register' element={<Register/>}/>
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/single' element={<Single/>}/>
//       <Route path='/write' element={ <Write/>}/>
 
//  </Routes>
//       <Footer/>
//     </>
//   )
// }

// export default App

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Single from "./Pages/Single";
import Write from "./Pages/Write";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import "./style.scss"
const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;


// import { useState } from 'react'
// import { Routes,Route } from "react-router-dom"
// import './App.css'
// import Register from './Pages/Register'
// import Login from './Pages/Login'
// import Home from './Pages/Home'
// import Single from './Pages/Single'
// import Write from './Pages/Write'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'

// function App() {
//   return (
//     <div className="app">
//       <div className="container">
//          <Navbar/>
      
//    <Routes>
//      <Route path='/' element={<Home/>}/>
//       <Route path='/register' element={<Register/>}/>
//        <Route path='/login' element={<Login/>}/>
//        <Route path='/single' element={<Single/>}/>
//       <Route path='/write' element={ <Write/>}/>
 
//   </Routes>
//        <Footer/>
//       </div>
//     </div>
//   );
// }

// export default App;