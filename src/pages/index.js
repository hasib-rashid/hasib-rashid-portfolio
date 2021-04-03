import * as React from "react";
import "../styles/global.css";
import Home from "../components/Home.js";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";

const IndexPage = () => {
    return (
        <main>
            <Header />
            <Home />
            <About />
            <Skills
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
                paragraph="This is my paragraph"
            />
        </main>
    );
};

export default IndexPage;
