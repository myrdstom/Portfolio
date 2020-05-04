import React from "react"
import summaryStyles from "./summary.module.scss"


const SummaryPage = () => {
  return (
    <section className={summaryStyles.container}>
      <h1>Hi</h1>
      <h2>I'm Paul</h2>
      <div>I create awesome experiences for the web</div>
      <span>
        <a href="mailto:nserekopaul@gmail.com">Get In touch</a>
      </span>
    </section>
  )
}

export default SummaryPage
