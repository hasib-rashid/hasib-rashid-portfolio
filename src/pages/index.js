import * as React from "react";
import "../styles/global.css";
import Home from "../components/Home.js";
import Header from "../components/Header";

const IndexPage = () => {
    return (
        <main>
            <Header />
            <Home />
        </main>
    );
};

export default IndexPage;
