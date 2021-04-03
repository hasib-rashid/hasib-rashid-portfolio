import * as React from "react";
import "../styles/global.css";
import Home from "../components/Home.js";
import Header from "../components/Header";
import About from "../components/About";

const IndexPage = () => {
    return (
        <main>
            <Header />
            <Home />
            <About />
        </main>
    );
};

export default IndexPage;
