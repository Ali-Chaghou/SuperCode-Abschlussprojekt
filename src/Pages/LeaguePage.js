import "./LeaguePage.css";
import React from "react";
import { Link } from "react-router-dom";

class LeaguePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenLeague: [],
      leagueSport: "",
      leagueName: "",
      sportImage: [],
    };
  }

  componentDidMount() {
    const params = decodeURIComponent(window.location.pathname.split("/")[2]);
    const leagueAndSport = new URLSearchParams(params);
    console.log("league", leagueAndSport.get("league"));
    console.log("sport", leagueAndSport.get("sport"));

    this.setState({ leagueSport: leagueAndSport.get("sport") });
    this.setState({ leagueName: leagueAndSport.get("league") });

    this.props.changeQuery("");

    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${leagueAndSport.get(
        "league"
      )}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        this.setState({ chosenLeague: res.teams });
      });

    fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          sportImage: res.sports.filter((sporten) =>
            sporten.strSport.includes(leagueAndSport.get("sport"))
          ),
        });
      });
  }

  showState = () => {
    console.log("leagueSport", this.state.leagueSport);
  };

  render() {
    return (
      <section className="div-league">
        <button onClick={this.showState}>Klick Mich</button>
        <section className="league-header-wrapper">
          {this.state.sportImage.map((sport, index) => (
            <div>
              <section
                key={index}
                className="league-header"
                style={{
                  backgroundImage: `url(${sport.strSportThumb})`,
                  filter: "grayscale(100%)",
                }}
              ></section>
              <section className="noFilter">
                <h1>{this.state.leagueName}</h1>
                <h2>{this.state.leagueSport}</h2>
              </section>
            </div>
          ))}
        </section>
        <section className="list-wrapper">
          <div className="list">
            {this.state.chosenLeague
              .filter((team) =>
                team.strTeam
                  .toUpperCase()
                  .includes(this.props.searchQuery.toUpperCase())
              )
              .map((team, index) => (
                <Link
                  to={`/details/league=${encodeURIComponent(
                    team.strLeague
                  )}&team=${encodeURIComponent(team.strTeam)}`}
                >
                  <h4 key={index} className="ScaleAnimation">
                    {team.strTeam} <span>{team.strStadiumLocation}</span>
                  </h4>
                </Link>
              ))}
          </div>
        </section>
      </section>
    );
  }
}

export default LeaguePage;
