import React, {useEffect} from "react"

const ExperiencePage = () => {
    return (
        <section className="experience-container">
            <div className="titleContainer">
                <h1 data-aos-delay="2000" data-aos="fade-up" id="Experience" className="title">
                    Where I've worked
                </h1>
            </div>
            <div>
                <div data-aos="fade-up" className="timeline">
                    <ul className="ul">
                        <li
                            className="date"
                            data-date="Oct 2019 - present"
                        >
                            <h1>Adam's Studio</h1>
                            <h2 className="responsive">Oct 2019 - present</h2>
                            <p>
                                Write modern performant code for a multitude of clients and
                                internal projects. Work with a variety of technologies inclusive
                                of JavaScript, TypeScript, PHP, T-SQL, React, Express, Docker,
                                Nginx, Digital Ocean.
                                <br />
                                <br />
                                Communicate remotely with a distributed, multi-disciplinary team
                                of engineers, designers and clients on a daily basis
                            </p>
                        </li>
                        <li
                            className="date"
                            data-date="Nov 2018 - Sept 2019"
                        >
                            <h1>Andela</h1>
                            <h2 className="responsive">Nov 2018 - Sept 2018</h2>
                            <p>
                                Worked with a variety of Technologies at Andela using various
                                Technologies, such as MERN/PREN stack, Python Django
                                <br />
                                <br />
                                Developed and shipped and maintained various in house
                                applications.
                            </p>
                        </li>
                        <li
                            className="date"
                            data-date="Nov 2017 - Aug 2018"
                        >
                            <h1>March 5 Design</h1>
                            <h2 className="responsive">Nov 2017 - Aug-2018</h2>
                            <p>
                                Developed and maintained multiple applications for various
                                clients. Worked with core technologies such as Python, Flask,
                                Wordpress, JavaScript, HTML and (S)CSS
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ExperiencePage
