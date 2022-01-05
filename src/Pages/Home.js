import "./Home.css";

import HomeHeader from "../Components/HomeHeader.js";
import HomeFilterBarList from "../Components/HomeFilterBarList.js";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="wrapper-Home">
      <HomeHeader />
      <HomeFilterBarList />
    </section>
  );
};

export default Home;
