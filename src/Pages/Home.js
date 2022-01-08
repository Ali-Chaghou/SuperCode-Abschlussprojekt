import "./Home.css";

import HomeHeader from "../Components/HomeHeader.js";
import HomeFilterBarList from "../Components/HomeFilterBarList.js";
import LeaguePageList from "../Components/LeaguePageList"

const Home = (props) => {
  return (
    <section className="wrapper-Home">
      <HomeHeader />
      <HomeFilterBarList searchQuery={props.searchQuery}/>
      <LeaguePageList />
    </section>
  );
};

export default Home;
