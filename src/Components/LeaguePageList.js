import "./LeaguePageList";

//Link
import { Link } from "react-router-dom";

const LeaguePageList = (props) => {
    console.log(props.leagues)
    return ( 
        <main>
        {props.leagues.map((league) => (
          <article key={league.strSport}>
            <h2>{league.strLeagues}</h2>
            <Link to={`/league/${league._id}`} id={league._id}>
            {league.strLeague}
            </Link>
          </article>
        ))}
      </main>
     );
}
 
export default LeaguePageList;