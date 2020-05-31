import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
  const onClick = () => {
    document.getElementById("cancel").click()
  };
  return (
    <div>
      <header className="nav" id="Nav">
        <nav data-aos="fade-right" data-aos-once="true">
          <ul className="navList">
            <li>
              <AnchorLink className="navItem" href="#Summary">
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="navItem" href="#Experience">
                Experience
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="navItem" href="#Work">
                Work
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="navItem" href="#Contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="fixed-header">
        <div className="newSideBar">
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <span className="test">
              <i className="fa fa-list-ul" id="btn" />
            </span>
            <i className="fa fa-ellipsis-v" id="cancel" />
          </label>
          <div className="sidebar">
            <ul>
              <li>
                <AnchorLink
                  href="#Summary"
                  className="anchorLink"
                  onClick={onClick}
                >
                  <i className="fa fa-question-circle-o" /> About
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#Experience"
                  className="anchorLink"
                  onClick={onClick}
                >
                  <i className="fa fa-sliders" /> Experience
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#Work"
                  className="anchorLink"
                  onClick={onClick}
                >
                  <i className="fa fa-database" /> Work
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#Contact"
                  className="anchorLink"
                  onClick={onClick}
                >
                  <i className="fa fa-headphones" />
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
