import React from "react"
import { FaChevronUp } from "react-icons/fa"
import AnchorLink from "react-anchor-link-smooth-scroll"

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div data-aos="fade-right" data-aos-once="true" >
        <h1 id="Contact">Get In Touch</h1>
      </div>
      <div data-aos="fade-left" data-aos-once="true" >
        <p>Have an opportunity you would love to discuss?</p>
      </div>
      <span data-aos="fade-up" data-aos-once="true">
        <a href="mailto:nserekopaul@gmail.com">Say Hello</a>
      </span>
      <div className="up">
        <FaChevronUp className="icon" />
      </div>
    </div>
  )
}

export default ContactPage
