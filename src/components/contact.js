import React from "react"
import { FaChevronUp } from "react-icons/fa"

const ContactPage = () => {
    return (
        <div className="contact-container">
            <h1 id="Contact">Get In Touch</h1>
            <p>Have an opportunity you would love to discuss?</p>
            <span>
        <a href="mailto:nserekopaul@gmail.com">Say Hello</a>
      </span>
            <div className="up">
                <FaChevronUp className="icon"/>
            </div>
        </div>
    )
}

export default ContactPage
