import React from "react"
import profilePicture from '../assets/images/profilePicture.png'

const AboutPage = () => {

    return (
        <section>
            <div className="about-container">
                <div className="profilePicture">
                    <div className="beforeHeading">
                        <h1 id="About"className="largeHeading">About</h1>
                        <h1 className="smallHeading">Myself</h1>
                    </div>
                    <div className="profilePicture">
                        <img src={profilePicture} alt="Logo" className="profile-image"/>
                    </div>
                </div>
                <div className="details">
                    <div className="heading">
                        <h1 className="largeHeading">About</h1>
                        <h1 className="smallHeading">Myself</h1>
                    </div>

                    <p className="content">
                        {" "}
                        <div className="contentTitle">I'm a product designer based in  Kampala, Uganda.</div>I
                        enjoy turning complex problems into simple, beautiful and intuitive
                        and performant experiences. Here are a few technologies I've been
                        working with recently
                        <div className="tech">
                            <div>
                                <ul>
                                    <li>Javascript (ES6+)</li>
                                    <li>TypeScript</li>
                                    <li>React</li>
                                    <li>Node</li>

                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>PHP</li>
                                    <li>T-SQL</li>
                                    <li>HTML & (S)CSS</li>
                                    <li>Docker</li>
                                </ul>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutPage
