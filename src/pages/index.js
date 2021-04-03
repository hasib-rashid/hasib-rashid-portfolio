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
            <Skills />
        </main>
    );
};

export default IndexPage;
