import "./App.css";
import React from "react";

//Routing
import { BrowserRouter, Routes, Route} from "react-router-dom";

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
      searchQuery: '',
      league: [],
      details: [],
    };
  }

  changeQuery = (query) => {
    console.log('changeQuery--'+ query);
    this.setState( state => ({
      searchQuery: query
    })
    );
  };




  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar changeQuery={this.changeQuery} searchQuery={this.state.searchQuery}/>
          <Animation className="Animation-Arrow"/>
          {/*Pages*/}
          <Routes>
            <Route path="/" element={<Home searchQuery={this.state.searchQuery}/>} />
            <Route path="/league/:id" element={<LeaguePage changeQuery={this.changeQuery} searchQuery={this.state.searchQuery}/>} />
            <Route path="/details/:id" element={<DetailSite />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
