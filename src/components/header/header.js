import React from "react";

import headerStyles from './header.module.scss';

const Header = () =>{
    return (
        <header className={headerStyles.header}>
            <nav>
                <div>Logo</div>
                <ul className={headerStyles.navList}>
                    <li><a className={headerStyles.navItem}  href="#About">About</a></li>
                    <li><a className={headerStyles.navItem}  href="#Experience">Experience</a></li>
                    <li><a className={headerStyles.navItem}  href="#Work">Work</a></li>
                    <li><a className={headerStyles.navItem}  href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header