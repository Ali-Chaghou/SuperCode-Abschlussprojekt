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
  super()
  this.state = {
  leagues: [],
  };
}


  componentDidMount() {
    let pathname = window.location.pathname;
    let id = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.length);


    fetch(`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php/${id}`)
      .then((res) => res.json())
      .then((res) => {
        (console.log(res.leagues))
        this.setState({leagues: res.leagues});
  });
  }

//   Searchbar = () => {

//     let searchInput = document.querySelector('#input-search').value.toUpperCase();
//     let searching = this.state.leagues.filter((league) => league.strSport.toUpperCase().includes(searchInput));
//     this.setState({leagues: searching});
// }

  render() {
  return(
        <BrowserRouter>
        <div className="App">
          
          <Navbar />




          <main>
            {this.state.leagues.map((league) => (
              <article key={league}>
                <h2>{league.strLeague}</h2>
                
              </article>
            ))}
            </main>
          



          {/*Pages - Test */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/league/:id" element={<LeaguePage leagues={this.state.leagues} />} />
            <Route path="/details" element={<DetailSite />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
  };

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
