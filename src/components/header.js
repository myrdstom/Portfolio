import React, {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div>
            <header className="nav">
                <nav data-aos="fade-right">
                    <ul className="navList">
                        <li>
                            <AnchorLink className="navItem" href="#About">
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
                                <a href="#About"><i className="fa fa-user-o" /> About</a>
                            </li>
                            <li>
                                <a href="#Experience">
                                    <i className="fa fa-building"/> Experience
                                </a>
                            </li>
                            <li>
                                <a href="#Work">
                                    <i className="fa fa-briefcase"/> Work
                                </a>
                            </li>
                            <li>
                                <a href="#Contact">
                                    <i className="fa fa-phone"/>Contact
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Header