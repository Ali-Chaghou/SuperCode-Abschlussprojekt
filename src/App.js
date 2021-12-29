import './App.css';

//Images


//Routing 
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

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
    <BrowserRouter>
    <div className="App">
      {/*Pages*/}
       
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/league' element={<LeaguePage />} />
        <Route path='/details' element={<DetailSite />} />
  
        {/* <DetailSite />
        <Home />
        <LeaguePage />
        {/*Component*/}
        {/* <NavBar /> */}
        {/*Components-Home*/}
        {/* <HomeHeader />
        <HomeFilterBarList />
        <HomeArrowUp /> */}
        {/*Components-LeaguePage*/}
        {/* <LeaguePageHeader />
        <LeaguePageList /> */}
        {/*Components-DetailSite*/}
        {/* <DetailSiteTeamHeader />
        <DetailSiteCompetitions />
        <DetailSiteDescriptions />
        <DetailSiteStadium />
        <DeatilSiteLink /> */} */
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
