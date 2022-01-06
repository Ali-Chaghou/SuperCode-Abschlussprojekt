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

  // getLeague = (leagueName) => {
  //   componentDidMount() {
  //     fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${leagueName}`)
  //     then((res1) => res1.json())
  //     then((res1) => {this.setState({ league: res1})});
  //   }
  // };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Animation />
          {/*Pages*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/league"
              element={<LeaguePage league={this.state.league} />}
            />
            <Route
              path="/details"
              element={<DetailSite details={this.state.details} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
        
//         <Navbar />
//         {/*Pages*/}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/league" element={<LeaguePage />} />
//           <Route path="/details" element={<DetailSite />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
