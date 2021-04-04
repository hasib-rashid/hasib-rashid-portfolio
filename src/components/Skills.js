import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Skills = () => {
    return (
        <div className="Skills">
            <h1>My Skills</h1>

            <div className="my_skills">
                <div className="skill">
                    <StaticImage
                        src="../../assets/icon/react.svg"
                        alt="React Icon"
                        width="150px"
                        height="150px"
                    />

                    <p>ReactJS</p>
                </div>

                <div className="skill">
                    <StaticImage
                        src="../../assets/icon/gatsby.svg"
                        alt="React Icon"
                        width="155px"
                        height="50px"
                    />

                    <p>Gatsby</p>
                </div>

                <div className="skill">
                    <StaticImage
                        src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                        alt="NextJS Icon"
                        width="150px"
                        height="125px"
                    />

                    <p>NextJS</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
