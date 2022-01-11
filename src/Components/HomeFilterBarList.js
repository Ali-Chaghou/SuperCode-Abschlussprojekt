import "./HomeFilterBarList.css";
import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

//images
import Close from "../Images/close.png";

class HomeFilterBarList extends React.Component {
  constructor() {
    super();
    this.state = {
      allLeagues: [],
      allLeaguesInitial: [],
      allcountries: [],
      allsports: [],
      chosenCountry: "",
      chosenSport: "",
      isDropDownOpen: false,
      isArrowUp: false,
      isSportShown: false,
    };
  }

  componentWillMount() {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ allLeagues: res.leagues });
      });

    fetch("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ allLeaguesInitial: res.leagues });
      });

    fetch("https://www.thesportsdb.com/api/v1/json/2/all_countries.php")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        this.setState({ allcountries: res.countries });
      });

    fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ allsports: res.sports });
      });
  }

  toggleDropDown = () => {
    if (this.state.isDropDownOpen === false) {
      this.setState({ isDropDownOpen: true });
      this.setState({ isArrowUp: true });
    } else {
      this.setState({ isDropDownOpen: false });
      this.setState({ isArrowUp: false });
    }
  };

  // selectCountry = (countryName) => {
  //   this.setState({
  //     chosenCountry: countryName,
  //   });
  //   console.log("nach selectCountry: " + this.state.chosenCountry);
  // };

  selectSport = (sport) => {
    this.setState({
      chosenSport: sport,
    });
  };

  filterBySport = (sportType) => {
    this.setState({
      allLeagues: this.state.allLeagues.filter((sport) =>
        sport.strSport.includes(sportType)
      ),
    });
  };

  toggleSportDisplay = () => {
    if (this.state.isSportShown === false) {
      this.setState({ isSportShown: true });
    } else {
      this.setState({ isSportShown: false });
      this.setState({ chosenSport: "" });
      this.setState({ allLeagues: this.state.allLeaguesInitial });
    }
  };
  // clearAllLeaguesFromList = () => {
  //   this.setState({ allLeagues: this.state.allLeaguesInitial });
  // };

  clearSport = (sport) => {
    if (this.state.chosenSport === sport) {
      this.setState({ chosenSport: "" });
      this.setState({ allLeagues: this.state.allLeaguesInitial });
    }
  };

  // clearLeague = (sport) => {
  //   if (this.state.chosenSport === sport) {
  //     this.setState({ allLeagues: this.state.allLeagues });
  //   }
  // };

  render() {
    let dropDownClass = classNames({
      hidden: true,
      "dropdown-shown": this.state.isDropDownOpen,
    });

    let arrowDownClass = classNames({
      selectdown: true,
      "select-wrapper-up": this.state.isArrowUp,
    });

    let showSportClass = classNames({
      sportHidden: true,
      sportShown: this.state.isSportShown,
    });

    return (
      <div className="filterbar-list">
        <section className="filterbar">
          <div className={showSportClass}>
            <img
              src={Close}
              alt="close"
              onClick={this.toggleSportDisplay}
            ></img>
            {this.state.chosenSport}
          </div>
          <div className="dropdowns">
            <div className={arrowDownClass}>
              <button onClick={this.toggleDropDown} className="select">
                All Sports
              </button>
            </div>
            <div className="dropdown-wrapper">
              <div className={dropDownClass}>
                {this.state.allsports.map((sport) => (
                  <label className="container">
                    <input
                      value={sport.strSport}
                      type="checkbox"
                      name="checkbox"
                      checked={this.state.chosenSport === sport.strSport}
                      onClick={() => {
                        this.toggleDropDown();
                        this.selectSport(sport.strSport);
                        this.toggleSportDisplay();
                        this.filterBySport(sport.strSport);
                        this.clearSport(sport.strSport);
                      }}
                    />
                    <span className="checkmark"></span>
                    {sport.strSport}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="list-wrapper">
          <div className="list">
            {this.state.allLeagues
              .filter((league) =>
                league.strLeague
                  .toUpperCase()
                  .includes(this.props.searchQuery.toUpperCase())
              )
              .map((league, index) => (
                <Link to={`/league/${league.strLeague}`}>
                  <h4 key={index} className="Left-to-right">
                    {league.strLeague} <span>{league.strSport}</span>
                  </h4>
                  <br />
                </Link>
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default HomeFilterBarList;
