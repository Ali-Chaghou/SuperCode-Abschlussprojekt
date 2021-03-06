import './NavBar.css';

import Logo from '../Images/Union.svg';
import Loupe from '../Images/Searchloupe.svg';

import React from 'react';

import { Link } from "react-router-dom";


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

    onQueryEnter = () => {
        let input = document.querySelector('#input-search').value;
        console.log(input);
        this.props.changeQuery(input);
        const searchbar = document.querySelector('.form-searchbar');

        if(input.length > 0){
            searchbar.style.width = '300px';
        } else {
            searchbar.style.width = '60px';
        }
    }
   

    render() { 
        return(
             
            <div className='div-navbar navbar-sticky'>
                <Link to="/">
                    <div className='div-logo'>
                        <h4 className='h4-navbar'>
                            <img src={Logo} alt='sports.db Logo'></img>
                            <span className="span-uppercase">sports.db</span></h4>
                    </div>
                </Link>
                <form className='form-searchbar'>
                    <img src={Loupe} alt='searchloupe'></img>
                    <input type='text' id='input-search' className='input-search' onChange={this.onQueryEnter} value={this.props.searchQuery}></input>
                </form>
            </div>
        );
    }
}
 
export default Navbar;