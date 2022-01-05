import './NavBar.css';

import Logo from '../Images/Union.svg';
import Loupe from '../Images/Searchloupe.svg';

import React from 'react';

//Components


class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
        leagues: [],
        };
      }


    //   componentDidMount() {
    //     let pathname = window.location.pathname;
    //     let id = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.length);


    //     fetch(`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php/${id}`)
    //       .then((res) => res.json())
    //       .then((res) => {
    //         (console.log(res.leagues))
    //         this.setState({leagues: res});
    //         //.then((res) => {(console.log(res))}
    //   });
    //   }

    //   Searchbar = () => {

    //     let searchInput = document.querySelector('#input-search').value.toUpperCase();
    //     let searching = this.state.leagues.filter((league) => league.strSport.toUpperCase().includes(searchInput));
    //     this.setState({leagues: searching});
    // }
   

    render() { 
        return(
         <div className='div-navbar'>

         <div className='div-logo'>
            <h4 className='h4-navbar'>
                <img src={Logo} alt='sports.db Logo'></img>
                <span className="span-uppercase">sports.db</span></h4>
        </div>

        {/* <h2 className='STR-Sport'>{this.state.leagues.strSport}</h2> */}

            {/* <section>
                {this.state.leagues.map((league) => (
                    <article key={league.strSport}>
                        <h2>{league.strSport}</h2>
                    </article>
                ))}
            </section> */}
        
        <form className='form-searchbar'>
            <img src={Loupe} alt='searchloupe'></img>
            <input type='text' id='input-search' className='input-search'></input>
        </form>

    </div>
        )

    }
}
 
export default Navbar;

