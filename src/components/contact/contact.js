import React from "react"
import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <div className={contactStyles.container}>
      <h1 id="Contact">Get In Touch</h1>
      <p>Have an opportunity you would love to discuss?</p>
      <span>
        <a href="mailto:nserekopaul@gmail.com">Say Hello</a>
      </span>
    </div>
  )
}

export default ContactPage
