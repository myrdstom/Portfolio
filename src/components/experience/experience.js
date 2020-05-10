import React from "react"
import experienceStyles from "./experience.module.scss"

const ExperiencePage = () => {
  return (
    <section className={experienceStyles.container}>
      <div className={experienceStyles.titleContainer}>
        <h1 id="Experience" className={experienceStyles.title}>
          Where I've worked
        </h1>
      </div>
      <div>
        <div className={experienceStyles.timeline}>
          <ul className={experienceStyles.ul}>
            <li
              className={experienceStyles.date}
              data-date="Oct 2019 - present"
            >
              <h1>Adam's Studio</h1>
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
              className={experienceStyles.date}
              data-date="Nov 2018 - Sept 2019"
            >
              <h1>Andela</h1>
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
              className={experienceStyles.date}
              data-date="Nov 2017 - Aug 2019"
            >
              <h1>March 5 Design</h1>
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
