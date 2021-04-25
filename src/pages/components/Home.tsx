import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../../styles/global.css"
import Header from "./Header";

const Home = () => {
    return (
        <div className="Home">
            <div className="parallax">
                <div className="infos">
                    <h1>Hasib Al Rashid</h1>
                    <h2>Programmer, Student, Cadet</h2>
                    <h3>12 Years Old</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;