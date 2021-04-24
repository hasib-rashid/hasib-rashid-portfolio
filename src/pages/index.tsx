import * as React from "react"
import '../styles/global.css'
import Header from "./components/Header"
import Home from "./components/Home"
import Skills from "./components/Skills"

const IndexPage = () => {
	return (
		<main>
			<Header />
			<Home />
			<Skills />
		</main>
	)
}

export default IndexPage
