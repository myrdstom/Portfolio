import React from "react"
import { FaListUl, FaEllipsisV } from "react-icons/fa"

const Header = () => {
    return (
        <div>
            <header className="header">
                <nav>
                    <ul className="navList">
                        <li>
                            <a className="navItem" href="#About">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="navItem" href="#Experience">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a className="navItem" href="#Work">
                                Work
                            </a>
                        </li>
                        <li>
                            <a className="navItem" href="#Contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <span className="newSideBar">
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
            </span>
        </div>
    )
}

export default Header