import React, { useEffect } from "react"
import { FaChevronUp } from "react-icons/fa"
import Aos from "aos"
import "aos/dist/aos.css"

const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="contact-container">
      <div data-aos="fade-right">
        <h1 id="Contact">Get In Touch</h1>
      </div>
      <div data-aos="fade-left">
        <p>Have an opportunity you would love to discuss?</p>
      </div>
      <span data-aos="fade-up">
        <a href="mailto:nserekopaul@gmail.com">Say Hello</a>
      </span>
      <div className="up">
        <FaChevronUp className="icon" />
      </div>
    </div>
  )
}

export default ContactPage
