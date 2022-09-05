import React, { useState } from "react"
import employers from "../data/employers"
import { FaAngleDoubleRight } from "react-icons/fa"

const ExperiencePage = () => {
  const [jobs, setJobs] = useState(0)
  return (
    <section className="jobs-section">
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
          <section data-aos="fade-up" data-aos-once="true" >
            <div className="jobs-center">
              <div className="btn-container">
                {employers &&
                employers.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => setJobs(i)}
                    className={`job-btn ${i === jobs && "active-btn"}`}
                  >
                    <span className="employer">{item.employer}</span>
                  </button>
                ))}
              </div>
              <article className="job-info">
                <h3>{employers[jobs].role}</h3>
                <p className="job-date">{employers[jobs].period}</p>
                {
                  employers[jobs].workDone.map((item,i) =>(
                    <div key={i} className="job-desc">
                      <FaAngleDoubleRight className="job-icon"/>
                      <p>{item}</p>
                    </div>
                  ))
                }

              </article>
            </div>
          </section>
      </div>
    </section>
  )
}

export default ExperiencePage
