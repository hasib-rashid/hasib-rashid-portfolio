import * as React from "react"
import '../styles/global.css'
import Header from "./components/Header"
import Home from "./components/Home"
import Project from "./components/Project"
import Skills from "./components/Skills"

const IndexPage = () => {
	return (
		<main>
			<Header />
			<Home />
			<Skills />
			<Project />
		</main>
	)
}

export default IndexPage
