import React from "react"
// import { FaListUl, FaEllipsisV } from "react-icons/fa"

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
        </div>
    )
}

export default Header