import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Loginpage from "./components/Loginpage";
import ReactDOM from "react-dom";

import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import loginPage from "./components/Loginpage";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component:  Navbar ,
    },
    {
      path: "/loginPage",
      Component:  loginPage ,
    },
  ]);


  return (
    <>
      <RouterProvider router={routes}>

        <Navbar/>
        {/* <Route path="/LoginPage" element={loginPage}></Route> */}
      </RouterProvider>
    </>
  );
}

export default App;
