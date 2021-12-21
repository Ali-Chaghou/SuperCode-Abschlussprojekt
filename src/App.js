import './App.css';

//Images


//Routing 
import { BrowserRouter, Routes, Route} from "react-router-dom";

//RoutingLink only for copy   
import { Link } from "react-router-dom"


//Components
import NavBar from './Components/NavBar';
import HomeHeader from './Components/HomeHeader';
import HomeFilterBarList from './Components/HomeFilterBarList';
import HomeArrowUp from './Components/HomeArrowUp';
import LeaguePage_Header from './Components/LeaguePage_Header';
import LeaguePage_List from './Components/LeaguePage_List';
import DetailSite_TeamHeader from './Components/DetailSite_TeamHeader';
import DetailSite_Competitions from './Components/DetailSite_Competitions';
import DetailSite_Descriptions from './Components/DetailSite_Descriptions';
import DetailSite_Stadium from './Components/DetailSite_Stadium';
import DeatilSite_Link from './Components/DetailSite_Links';

//Pages
import DetailSite from './Pages/DetailSite';
import Home from './Pages/Home';
import LeaguePage from './Pages/LeaguePage';





function App() {
  return (
    <div className="App">
      {/*Pages*/}
      <DetailSite />
      <Home />
      <LeaguePage />
       {/*Component*/}
      <NavBar />
       {/*Components-Home*/}
      <HomeHeader />
      <HomeFilterBarList />
      <HomeArrowUp />
       {/*Components-LeaguePage*/}
      <LeaguePage_Header />
      <LeaguePage_List />
       {/*Components-DetailSite*/}
      <DetailSite_TeamHeader />
      <DetailSite_Competitions />
      <DetailSite_Descriptions />
      <DetailSite_Stadium />
      <DeatilSite_Link />
    </div>
  );
}

export default App;
