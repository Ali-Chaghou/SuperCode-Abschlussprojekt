
import React from "react";
// import {Link} from "react-router-dom"
import "./LeaguePageList";

//Link
import { Link } from "react-router-dom";

const LeaguePageList = (props) => {
    console.log(props.leagues)
    return ( 
        <main>
        {/* {props.leagues.map((league) => (
          <article key={league.strSport}>
            <h2>{league.strLeagues}</h2>
            <Link to={`/league/${league._id}`} id={league._id}>
            {league.strLeague}
            </Link>
          </article>
        ))} */}
      </main>
     );
}

// class LeaguePageList extends React.Component {



//     constructor (){
//         super()
//         this.state ={
            
//             leagues:[],
          
//         };
//     }

   
//     componentDidMount() {
//         fetch("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php")
//           .then((res) => res.json())
//           .then((res) => {
            
//             this.setState({ leagues: res.leagues });
            
//           });
//       }

//     render() { 
//         return (
//             <div> 

                
//                 {this.state.leagues.map((league) => (
//                     <article key={league.strLeague}>
//                         <h2>{league.strLeague}</h2>

//                     </article>
//                 )

//                 )}
//             </div>
//         )
//     }
// }
 

 
 
export default LeaguePageList;