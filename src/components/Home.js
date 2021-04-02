import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Header from "./Header";

const Home = () => {
    return (
        <div className="Home">
            <div className="parallax">
                <Header />
                <StaticImage
                    className="layer p1"
                    src="../../assets/svg/1.svg"
                    alt="Svg 1"
                />
                <StaticImage
                    className="layer p2"
                    src="../../assets/svg/2.svg"
                    alt="Svg 2"
                />
                <StaticImage
                    className="layer p3"
                    src="../../assets/svg/3.svg"
                    alt="Svg 3"
                />
                <StaticImage
                    className="layer p4"
                    src="../../assets/svg/4.svg"
                    alt="Svg 4"
                />
                <StaticImage
                    className="layer p5"
                    src="../../assets/svg/5.svg"
                    alt="Svg 5"
                />
                <StaticImage
                    className="layer p6"
                    src="../../assets/svg/6.svg"
                    alt="Svg 6"
                />
                <StaticImage
                    className="layer p7"
                    src="../../assets/svg/7.svg"
                    alt="Svg 7"
                />
                <StaticImage
                    className="layer p8"
                    src="../../assets/svg/8.svg"
                    alt="Svg 8"
                />
                <StaticImage
                    className="layer p9"
                    src="../../assets/svg/9.svg"
                    alt="Svg 9"
                />
                <StaticImage
                    className="layer p10"
                    src="../../assets/svg/10.svg"
                    alt="Svg 10"
                />
                <StaticImage
                    className="layer p11"
                    src="../../assets/svg/11.svg"
                    alt="Svg 11"
                />
                <div className="infos">
                    <h1>Hasib Al Rashid</h1>
                    <h2>Programmer, Student, Cadet</h2>
                    <h3>13 Years Old</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;
