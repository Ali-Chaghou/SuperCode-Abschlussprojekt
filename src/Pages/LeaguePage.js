import "./LeaguePage.css";
import React from "react";
import { Link } from "react-router-dom";

class LeaguePage extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenLeague: [],
    };
  }

  componentDidMount() {
    let pathname = window.location.pathname;
    let leagueName = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.length);

    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${leagueName}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ chosenLeague: res.teams });
      });
  }

  render() {
    return (
      <div className="div-league">
        <section className="list-wrapper">
          <div className="list">
<<<<<<< HEAD
            {this.state.chosenLeague.map((team) => (
              <Link to={`/details/${team.strTeam}`}>
                <h4 key={team.strTeam} className="ScaleAnimation">
=======
            {this.state.chosenLeague.map((team, index) => (
              <Link to={`/details/${team.strLeague + "+" + team.strTeam}`}>
                <h4 key={index}>
>>>>>>> 6a11255aa21b86178f517c277362fa1c4c67068a
                  {team.strTeam} <span>{team.strStadiumLocation}</span>
                </h4>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default LeaguePage;