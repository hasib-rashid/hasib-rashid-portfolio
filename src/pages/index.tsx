import * as React from "react"
import '../styles/global.css'
import Header from "./components/Header"
import Home from "./components/Home"
import ProjectCard from "./components/ProjectCard"
import Skills from "./components/Skills"

const IndexPage = () => {
	return (
		<main>
			<Header />
			<Home />
			<Skills />
			<ProjectCard img="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png" alt="An Image" title="A Title" description="The Description of the project Lmao" />
		</main>
	)
}

export default IndexPage
