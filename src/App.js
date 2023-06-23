import "./App.css";
import Navbar from "./components/Navbar";
import Loginpage from "./components/Loginpage";
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from "react-router-dom";
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: {Navbar},
    },
    {
      path: "/LoginPage",
      element: {Loginpage},
    },
  ]);
  
  return (
    <>
    
      <Navbar title="MySweetHome" link="Link" />
      {/* <Loginpage /> */}
    </>
  );
}

export default App;
