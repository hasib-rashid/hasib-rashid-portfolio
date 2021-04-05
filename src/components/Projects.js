import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Projects = () => {
    return (
        <div className="Projects">
            <h1>My Projects</h1>

            <div className="project">
                <StaticImage
                    src="http://localhost:8000/static/810c4a65d51355568a4dd50cdf9e9a02/0cff0/react.webp"
                    alt="Project Img"
                    className="project_img"
                />

                <div className="project_txt">
                    <h2>ReactJS Project</h2>

                    <p>This is my ReactJS project Bla blah blah</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
