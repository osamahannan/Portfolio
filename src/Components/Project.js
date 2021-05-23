import React from "react";
const Project = () => {
    return (
        <div className="project">

            <div className="project-title">
                <h1 style={{ color: "rgb(104, 100, 100)" }}>My </h1>
                <h1 style={{ color: "white" }}>.</h1>
                <h1 style={{ color: "#BE185D" }}>Projects </h1>
            </div>


            <div className="project-container">
                <div className="item-1">
                    <div className="number"> 1.</div>
                    <div className="heading"> Wether App</div>
                </div>

                <div className="time1">3rd January, 2021</div>

                <div className="about-app">
                    <article>
                        <p>
                            Created an app in React-JS to check if entered birthdate is Palindrome.
                            If it is not palindrome, then it will show nearest palindrome date and by how many
                            days it got missed.
                        </p>
                    </article>
                </div>
                
                <div className="sandgit-links">
                    <div className="sandbox-link">
                        <a href="https://codesandbox.io/s/elated-lovelace-ykniy">Open App</a>
                    </div>

                    <div className="github-link">
                        <a href="https://github.com/osamahannan/React_Weather-App">View Source</a>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Project;