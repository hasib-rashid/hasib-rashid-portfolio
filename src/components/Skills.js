import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Skills = ({ src, alt, paragraph }) => {
    return (
        <div className="Skills">
            <h1>My Skills</h1>

            <div className="skill">
                <StaticImage
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt={alt}
                    width="125px"
                    height="125px"
                />

                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default Skills;
