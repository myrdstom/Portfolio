import React  from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
  return (
    <div>
      <header className="nav" id="Nav">
        <nav data-aos="fade-right">
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
              <AnchorLink href="#Summary" className="anchorLink">
                <i className="fa fa-user-o" /> About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#Experience" className="anchorLink">
                <i className="fa fa-building" /> Experience
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#Work" className="anchorLink">
                <i className="fa fa-briefcase" /> Work
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#Contact" className="anchorLink">
                <i className="fa fa-phone" />
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
