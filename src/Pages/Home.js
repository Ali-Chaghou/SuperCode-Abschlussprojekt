import "./Home.css";

import {Link} from "react-router-dom";

const Home = () => {
    return (
    <div className='div-home'>
        <ul>
            <li><Link to='/league'>Link to LeagueSite Test</Link></li>
        </ul>
    </div>
    );
}
 
export default Home;