import "./LeaguePage.css";

import {Link} from "react-router-dom";

const LeaguePage = () => {
    return (
        <div className='div-league'>
        <ul>
            <li><Link to='/details'>Link to DetailSite Test</Link></li>
        </ul>
    </div>
    );
}
 
export default LeaguePage;