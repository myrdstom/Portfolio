import React from "react"
import "../index.scss"

import layoutStyles from "../components/layout.module.scss"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import AboutPage from "../components/about/about"
import ContactPage from "../components/contact/contact"
import ExperiencePage from "../components/experience/experience"
import WorkPage from "../components/work/work"
const IndexPage = () => {
  return (
    <div className={layoutStyles.body}>
      <Header />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <h1>Hi</h1>
          <h1>I'm Paul</h1>
          <h1>Tinkerer</h1>
          <div>
            I create awesome experiences for the web
          </div>

          <AboutPage />
          <ExperiencePage />
          <WorkPage />
          <ContactPage />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
