import "./App.css";

//Routing
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Components
import Navbar from "./Components/NavBar";

//Pages
import DetailSite from "./Pages/DetailSite";
import Home from "./Pages/Home";
import LeaguePage from "./Pages/LeaguePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/*Pages*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/league" element={<LeaguePage />} />
          <Route path="/details" element={<DetailSite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
