import "./HomeFilterBarList.css";
import React from "react";
import { Link } from "react-router-dom";

import Close from "../Images/close.png";

class HomeFilterBarList extends React.Component {
  constructor() {
    super();
    this.state = {
      allLeagues: [],
      allcountries: [],
      allsports: [],
      chosenCountry: "",
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

  openDropDown = () => {
    document.querySelector(".dropdown").style.display = "block";
    document
      .querySelector(".select-wrapper-down")
      .classList.add("select-wrapper-up");
    document
      .querySelector(".select-wrapper-up")
      .classList.remove("select-wrapper-down");
  };
  closeDropDown = () => {
    document.querySelector(".dropdown").style.display = "none";
    document
      .querySelector(".select-wrapper-up")
      .classList.add("select-wrapper-down");
    document
      .querySelector(".select-wrapper-down")
      .classList.remove("select-wrapper-up");
  };
  showCountry = (countryName) => {
    document.querySelector(".chosen-country").style.opacity = "1";
    console.log(countryName);
    this.setState({
      chosenCountry: countryName,
    });
  };
  hideCountry = () => {
    document.querySelector(".chosen-country").style.opacity = "0";
  };

  render() {
    return (
      <div className="filterbar-list">
        <section className="filterbar">
          {/* <div className="chosen-country">
            <img src={Close} alt="close" onClick={this.hideCountry}></img>
            {this.state.chosenCountry}
          </div>
          <div className="dropdowns">
            <div className="select-wrapper-down">
              <button onClick={this.openDropDown} className="select">
                All Countries
              </button>
            </div>
            <div className="dropdown-wrapper">
              <div className="dropdown">
                {this.state.allcountries.map((country) => (
                  <label
                    key={country.name_en}
                    className="container"
                    value={country.name_en}
                    onClick={() => {
                      console.log("clicked");
                      this.closeDropDown();
                      this.showCountry(country.name_en);
                    }}
                  >
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={this.state.chosenCountry === country.name_en}
                    />
                    <button
                      className="checkmark"
                      onClick={() => {
                        if (this.state.chosenCountry === country.name_en) {
                          console.log(
                            this.state.chosenCountry === country.name_en
                          );
                          this.setState({ chosenCountry: "" });
                        }
                      }}
                    ></button>
                    {country.name_en}
                  </label>
                ))}
              </div>
            </div>
          </div> */}
        </section>
        <section className="list-wrapper">
          <div className="list">
            {this.state.allLeagues.filter(league => league.strLeague.toUpperCase().includes(this.props.searchQuery.toUpperCase()))
                                  .map((league, index) => (
              <Link to={`/league/${league.strLeague}`}>
                <h4 key={index}> {/*evtl. classe mit animation left-to-right hinzufügen*/}
                  {league.strLeague} <span>{league.strSport}</span>
                </h4><br />
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default HomeFilterBarList;

//unter 115 allLeagues filter einbauen, die query enthalten
