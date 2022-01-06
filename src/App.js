import "./App.css";
import React from "react";

//Routing
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Components
import Navbar from "./Components/NavBar";
import Animation from "./Components/Animation";

//Pages
import DetailSite from "./Pages/DetailSite";
import Home from "./Pages/Home";
import LeaguePage from "./Pages/LeaguePage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      league: [],
      details: [],
    };
  }

  testMeParent = () => {
    console.log("Hallo");
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar testMe={this.testMeParent} />
          {/*Pages*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/league/:id" element={<LeaguePage />} />
            <Route path="/details/:id" element={<DetailSite />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
