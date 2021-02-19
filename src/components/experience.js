import React from "react"
import employers from "../helpers/employers"

const ExperiencePage = () => {
  return (
    <section className="experience-container">
      <div className="titleContainer">
        <h1
          data-aos-delay="2000"
          data-aos="fade-up"
          data-aos-once="true"
          id="Experience"
          className="title"
        >
          Where I've worked
        </h1>
      </div>
      <div>
        <div data-aos="fade-up" data-aos-once="true" className="timeline">
          <ul className="ul">
            {employers.map((item) => (
              <li className="date" data-date={item.period}>
                <h1>{item.employer}</h1>
                <h2 className="responsive">{item.period}</h2>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.workDone,
                    }}
                  />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperiencePage
