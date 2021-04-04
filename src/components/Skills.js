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
                        src="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png"
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
                        width="155px"
                        height="125px"
                    />

                    <p>NextJS</p>
                </div>
                <div className="skill">
                    <StaticImage
                        src="https://img.icons8.com/fluent/125/000000/discord-new-logo.png"
                        alt="Discord Icon"
                        width="155px"
                        height="125px"
                    />

                    <p>DiscordJS</p>
                </div>
                <div className="skill">
                    <StaticImage
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                        alt="MongoDB Icon"
                        width="155px"
                        height="125px"
                    />

                    <p>MongoDB</p>
                </div>

                <div className="skill">
                    <StaticImage
                        src="https://img.icons8.com/color/125/000000/firebase.png"
                        alt="Firebase Icon"
                    />

                    <p>Firebase</p>
                </div>

                <div className="skill">
                    <StaticImage
                        src="https://img.icons8.com/color/125/000000/css3.png"
                        alt="CSS Icon"
                    />

                    <p>CSS</p>
                </div>

                <div className="skill">
                    <StaticImage
                        src="https://img.icons8.com/color/125/000000/nodejs.png"
                        alt="NodeJS Icon"
                    />

                    <p>NodeJS</p>
                </div>

                <div className="skill">
                    <StaticImage
                        src="https://pics.freeicons.io/uploads/icons/png/21299071571548141943-512.png"
                        alt="GraphQL Icon"
                        width="145px"
                        height="75px"
                    />

                    <p>GraphQL</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
