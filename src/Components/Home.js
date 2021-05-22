import React from "react";
import { Link } from 'react-router-dom';
import pic from '../assets/image1.jpg';
const Home = () => {
    return (
        <div className="Home">

            <img className="image" src={pic} alt="" />
            <div className="info"> <h3>Hi there!</h3> </div>


            <div className="information">
                <div className="info-1"> I'm Osama </div>
                <div className="info-2"> A Full Stack Web Developer </div>
            </div>


            <div className="about">
                <h2>About Me</h2>
                <article>
                    <p>I'm currently a student in Babu Banarasi Das Institute.<br />
                    I started learning web development out of curiosity. Now I want to pursue my career as a full stack web developer, as it's said -
                    “If passion drives you, let reason hold the reins.”– Benjamin Franklin
                    </p>
                </article>
            </div>


            <div className="technologies">
                <h2>Technologies</h2>
                <article>
                    <p>
                        I'm familiar with HTML5, CSS3, Git, Java, JavaScript, data structures and Web Hosting.
                    </p>
                </article>
            </div>


            <div className="project-intro">
                <h2>Projects</h2>
                <article>
                    <p>
                    I would like to showcase my work and thus, you can see my projects hosted online.
                    </p>
                </article>
                <div className="links">
                    <Link to="/Project">Browse Projects</Link>
                </div>
            </div>


        </div>
    );
}

export default Home;