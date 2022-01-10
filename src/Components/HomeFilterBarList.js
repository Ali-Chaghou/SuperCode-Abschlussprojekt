import "./HomeFilterBarList.css";
import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

//images
import Close from "../Images/close.png";
import Check from "../Images/Check.svg";

class HomeFilterBarList extends React.Component {
  constructor() {
    super();
    this.state = {
      allLeagues: [],
      allcountries: [],
      allsports: [],
      chosenCountry: "",
      isDropDownOpen: false,
      isArrowUp: false,
      isCountryShown: false,
    };
  }

  componentDidMount() {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_countries.php")
      .then((res1) => res1.json())
      .then((res1) => {
        // console.log(res1);
        this.setState({ allcountries: res1.countries });
      });

    fetch("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php")
      .then((res2) => res2.json())
      .then((res2) => {
        console.log(res2);
        this.setState({ allLeagues: res2.leagues });
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

  selectCountry = (countryName) => {
    this.setState({
      chosenCountry: countryName,
    });
    console.log("nach selectCountry: " + this.state.chosenCountry);
  };
  toggleCountry = () => {
    if (this.state.isCountryShown === false) {
      this.setState({ isCountryShown: true });
    } else {
      this.setState({ isCountryShown: false });
      this.setState({ chosenCountry: "" });
    }
  };
  clearCountry = (countryName) => {
    if (this.state.chosenCountry === countryName) {
      this.setState({ chosenCountry: "" });
    }
    console.log("nach clearCountry: " + this.state.chosenCountry);
  };
  render() {
    let dropDownClass = classNames({
      hidden: true,
      "dropdown-shown": this.state.isDropDownOpen,
    });

    let arrowDownClass = classNames({
      selectdown: true,
      "select-wrapper-up": this.state.isArrowUp,
    });

    let showCountryClass = classNames({
      countryHidden: true,
      countryShown: this.state.isCountryShown,
    });

    return (
      <div className="filterbar-list">
        <section className="filterbar">
          <div className={showCountryClass}>
            <img src={Close} alt="close" onClick={this.toggleCountry}></img>
            {this.state.chosenCountry}
          </div>
          <div className="dropdowns">
            <div className={arrowDownClass}>
              <button onClick={this.toggleDropDown} className="select">
                All Countries
              </button>
            </div>
            <div className="dropdown-wrapper">
              <div className={dropDownClass}>
                {this.state.allcountries.map((country) => (
                  <label className="container">
                    <input
                      value={country.name_en}
                      type="checkbox"
                      name="checkbox"
                      checked={this.state.chosenCountry === country.name_en}
                      onClick={() => {
                        this.toggleDropDown();
                        this.selectCountry(country.name_en);
                        this.toggleCountry();
                        this.clearCountry(country.name_en);
                      }}
                    />
                    <span className="checkmark"></span>
                    {country.name_en}
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
