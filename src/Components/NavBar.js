import './NavBar.css';

import Logo from '../Images/Union.svg';
import Loupe from '../Images/Searchloupe.svg';

import React from 'react';

class Navbar extends React.Component {
    render() { 
        return <div className='div-navbar'>
            <div className='div-logo'>
                <h4 className='h4-navbar'>
                    <img src={Logo} alt='sports.db Logo'></img>
                    <span className="span-uppercase">sports.db</span></h4>
            </div>
            <form className='form-searchbar'>
                <img src={Loupe} alt='searchloupe'></img>
                <input type='text' id='input-search' className='input-search'></input>
            </form>
        </div>;
    }
}
 
export default Navbar;