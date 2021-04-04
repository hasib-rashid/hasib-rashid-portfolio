import * as React from "react";
import "../styles/global.css";
import Home from "../components/Home.js";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const IndexPage = () => {
    return (
        <main>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
        </main>
    );
};

export default IndexPage;
