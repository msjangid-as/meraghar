import "./App.css";
import Navbar from "./components/Navbar";
import Loginpage from "./components/Loginpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const goToLoginPage = () => {
    console.log("Clicked");
    <Router>
      <Routes>
        <Route exact path="./components/Loginpage" component={Loginpage} />
      </Routes>
    </Router>;
  };

  
  return (
    <>
      <Navbar title="MySweetHome" link="Link" login={goToLoginPage} />
      {/* <Loginpage /> */}
    </>
  );
}

export default App;
