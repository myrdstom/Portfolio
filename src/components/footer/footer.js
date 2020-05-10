import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <a
        href="https://github.com/myrdstom/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <p className={footerStyles.content}>
          Designed and Built by Paul Kayongo
        </p>
      </a>
    </footer>
  )
}

export default Footer
