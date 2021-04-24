import React from "react";
import { StaticImage } from "gatsby-plugin-image";

type Props = {
    img: string,
    alt: string,
    title: string,
    description: string,
}

const ProjectCard = (props: Props) => {
    return (
        <div className="Projects">
            <h1>My Projects</h1>

            <div className="project">
                <StaticImage
                    src={props.img}
                    alt={props.alt}
                    className="project_img"
                />

                <div className="project_txt">
                    <h2>{props.title}</h2>

                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;