
import React from "react";
import {Link} from "react-router-dom"
import "./LeaguePageList";

const LeaguePageList = () => {
    return ( <h2>LeaguePage List Component and CSS import</h2> );
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