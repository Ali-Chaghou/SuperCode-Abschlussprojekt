import "./Home.css";

import HomeHeader from "../Components/HomeHeader.js";
import HomeFilterBarList from "../Components/HomeFilterBarList.js";
import LeaguePageList from "../Components/LeaguePageList"

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="wrapper-Home">
      <HomeHeader />
      <HomeFilterBarList />
      <LeaguePageList />
    </section>
  );
};

export default Home;
