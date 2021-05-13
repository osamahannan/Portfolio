import {Link} from 'react-router-dom';
const Nav = () => {
    return ( 
        <div className="container">
            <nav className="Nav-bar">
                <h2>C A R N A G E</h2>
                <div className="links">
                    <Link to="/"><b>Home</b></Link>
                    <Link to="/Project"><b>Projects</b></Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Nav;