import {Link} from 'react-router-dom';
const Nav = () => {
    return ( 
        <div className="container">
            <nav className="Nav-bar">
                <h2>C A R N A G E</h2>
                <div className="links">
                    <link to="/"><b>Home</b></link>
                    <link to="/Projects"><b>Projects</b></link>
                </div>
            </nav>
        </div>
     );
}
 
export default Nav;