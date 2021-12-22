import './App.css';

//Images


//Routing 
import { BrowserRouter, Routes, Route} from "react-router-dom";

//RoutingLink only for copy   import { Link } from "react-router-dom"


//Components
import NavBar from './Components/NavBar';
import HomeHeader from './Components/HomeHeader';
import HomeFilterBarList from './Components/HomeFilterBarList';
import HomeArrowUp from './Components/HomeArrowUp';
import LeaguePageHeader from './Components/LeaguePageHeader';
import LeaguePageList from './Components/LeaguePageList';
import DetailSiteTeamHeader from './Components/DetailSiteTeamHeader';
import DetailSiteCompetitions from './Components/DetailSiteCompetitions';
import DetailSiteDescriptions from './Components/DetailSiteDescriptions';
import DetailSiteStadium from './Components/DetailSiteStadium';
import DeatilSiteLink from './Components/DetailSiteLinks';

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
      <LeaguePageHeader />
      <LeaguePageList />
       {/*Components-DetailSite*/}
      <DetailSiteTeamHeader />
      <DetailSiteCompetitions />
      <DetailSiteDescriptions />
      <DetailSiteStadium />
      <DeatilSiteLink />
    </div>
  );
}

export default App;
