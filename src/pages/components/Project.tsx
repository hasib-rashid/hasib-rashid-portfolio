import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Project = () => {
    return (
        <div className="Projects">
            <h1>My Projects</h1>

            <div className="project">
                <StaticImage
                    src="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png"
                    alt="An Image"
                    className="project_img"
                />

                <div className="project_txt">
                    <h2>Title</h2>

                    <p>A Description</p>
                </div>
            </div>
        </div>
    );
};

export default Project;