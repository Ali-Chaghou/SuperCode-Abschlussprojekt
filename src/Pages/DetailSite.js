import React from "react";
import { Link } from "react-router-dom";
import "./DetailSite.css";


class DetailSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenTeam: [],
    };
  }

  
  

  

  componentDidMount() {
    const params = decodeURIComponent(window.location.pathname.split("/")[2]);
    const leagueAndTeam = new URLSearchParams(params);
    console.log("league", leagueAndTeam.get("league"));
    console.log("team", leagueAndTeam.get("team"));





    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${leagueAndTeam.get(
        "league"
      )}`
      
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          chosenTeam: res.teams.filter((team) =>
            team.strTeam.includes(leagueAndTeam.get("team"))
          ),

        });
        

      });
      
      // Socialmedialink = () => (
      //   <div>
      //     <ExternalLink href={team.strYoutube} />
      //   </div>
      // );
  }

  render() {
    return (
      <section className="detail-site">
        <div className="test">
          {this.state.chosenTeam.map((team, index) => (
            <article to={`/details/${team.strLeague}`}>
              <div key={index}>
                <header>
                  <section>
                    <h3>{team.strTeam}</h3>
                    <article className="header-text-img-wrapper">
                      <article className="detail-site-header-text">
                        <div>
                          <h5>{team.strTeam} </h5>
                          <h4>
                            <span>Country</span>
                          </h4>
                        </div>

                        <div>
                          <h5>{team.strStadiumLocation}</h5>
                          <h4>
                            <span>Location</span>
                          </h4>
                        </div>
                        <div>
                          <h5>{team.intFormedYear}</h5>
                          <h4>
                            <span>Established</span>
                          </h4>
                        </div>
                        <div>
                          <h5>{team.strSport}</h5>
                          <h4>
                            <span>Sport</span>
                          </h4>
                        </div>
                      </article>
                      <article>
                        <img src={team.strStadiumThumb} alt={team.strStadium} />
                      </article>
                    </article>
                  </section>
                </header>

                <main>
                  <article className="competitions">
                    <p>Competitions</p>
                    <div>
                      <h5 className="Left-to-right">{team.strLeague2}</h5>
                      <h5 className="Left-to-right">{team.strLeague3}</h5>
                      <h5 className="Left-to-right">{team.strLeague4}</h5>
                      <h5 className="Left-to-right">{team.strLeague5}</h5>
                      <h5 className="Left-to-right">{team.strLeague6}</h5>
                      <h5 className="Left-to-right">{team.strLeague7}</h5>
                    </div>
                  </article>
                  <article className="description">
                    <div>
                      <h5>DESCRIPTION</h5>
                    </div>
                    <div>
                      <p>{team.strDescriptionEN}</p>
                      <img src={team.strTeamBadge} alt="Team Badge" />
                    </div>
                  </article>
                  <article className="stadium">
                    <h6>Stadium</h6>
                    <div className="stadium-wrapper">
                      <p>{team.strStadiumDescription}</p>
                      <div>
                        <div>
                          <h5>{team.strStadiumLocation}</h5>
                          <span>Home</span>
                        </div>
                        <div>
                          <h5>{team.intStadiumCapacity}</h5>
                          <h4>
                            <span>Capacity</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </article>
                </main>
                <footer>
                  <a className="Left-to-right" href={`https://${team.strWebsite}`} target="_blank">
                    Website
                  </a>
                  <a className="Left-to-right" href={`https://${team.strFacebook}`} target="_blank">
                    Facebook
                  </a>
                  <a className="Left-to-right" href={`https://${team.strTwitter}`} target="_blank">
                    Twitter
                  </a>
                  <a className="Left-to-right" href={`https://${team.strInstagram}`} target="_blank">
                    Instagram
                  </a>
                  <a className="Left-to-right" href={`https://${team.strYoutube}`} target="_blank">
                    Youtube
                  </a>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}



export default DetailSite;
