import React from "react"
import { FaChevronUp } from "react-icons/fa"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Resume from "../assets/docs/Resume.pdf"

const ContactPage = () => {
  return (
    <div>
      <section className="contact-container">
        <div data-aos="fade-up" data-aos-once="true">
          <h1 id="Contact">Get In Touch</h1>
        </div>
        <div className="nav-items" data-aos="fade-up" data-aos-once="true">
          <ul className="nav-list">
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/kayongo-paul-72314656/"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-link"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/myrdstom"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-link"
              >
                <i className="fa fa-github" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href={Resume}
                download
                className="nav-link"
              >
                <i className="fa fa-file-pdf-o" />
              </a>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-once="true">
          <p>Have an opportunity you would love to discuss?</p>
        </div>
        <span data-aos="fade-up" data-aos-once="true">
          <a href="mailto:nserekopaul@gmail.com" className="mail">
            Say Hello
          </a>
        </span>
      </section>
      <AnchorLink href="#Nav" className="up">
        <FaChevronUp className="icon" />
      </AnchorLink>
    </div>
  )
}

export default ContactPage
