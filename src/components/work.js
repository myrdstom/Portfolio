import React from "react"
import OctoProfile from "../assets/images/octoProfile.png"
import SenteSol from "../assets/images/SenteSol.png"

import { FaGithub, FaLink, FaVideo } from "react-icons/fa"
import { IconContext } from "react-icons"
import additionalProjects from "../data/additionalProjects"
import featuredProjects from "../data/featuredProjects"

const WorkPage = () => {

  return (
    <section className="work-section">
      <div className="work-container">
        <h1 data-aos="fade-up" data-aos-once="true" id="Work" className="title">
          Some things I've built
        </h1>
      </div>
      <div className="featuredProjects">

        <div className="featuredProject">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="portfolioImage"
          >
            <div className="image">
              <a
                href="https://trusting-snyder-8aafe8.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={OctoProfile} alt="Logo" className="project-image" />
              </a>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-once="true" className="content">
            <div className="firstSmallHeading">
              <h1 className="smallHeading">Featured Project</h1>
              <h1 className="largeHeading">{featuredProjects[0].projectName}</h1>
            </div>
            <div className="portfolioImage">
              <div className="refactoredImage">
                <div className="octo-project-image">
                  {" "}
                  <a
                    href={featuredProjects[0].applicationLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  />
                </div>
              </div>
            </div>
            <p>
              <span
                  dangerouslySetInnerHTML={{
                    __html: featuredProjects[0].description,
                  }}
              />

            </p>
            <div className="firstProject">
              <span
                  dangerouslySetInnerHTML={{
                    __html: featuredProjects[0].technologies,
                  }}
              />
            </div>
            <IconContext.Provider
              value={{
                color: "#64FFDB",
                className: "global-class-name",
                size: "1.5rem",
              }}
            >
              <div className="firstProjectLinks">
                <a
                  className="favicon"
                  href={featuredProjects[0].videoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaVideo />
                </a>{" "}
                &nbsp; &nbsp;
                <a
                  href={featuredProjects[0].githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </a>{" "}
                &nbsp; &nbsp;
                <a
                  href={featuredProjects[0].applicationLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLink />
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="featuredProject">
          <div data-aos="fade-right" data-aos-once="true" className="content">
            <h1 className="smallHeading">Featured Project</h1>
            <h1 className="largeHeading">{featuredProjects[1].projectName} </h1>
            <div className="portfolioImage">
              <div className="refactoredImage">
                <div className="listicle-project-image">
                  {" "}
                  <a
                    href={featuredProjects[1].applicationLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  />
                </div>
              </div>
            </div>
            <p>
              <span
                dangerouslySetInnerHTML={{
                  __html: featuredProjects[1].description,
                }}
              />
            </p>
            <div className="secondProject">
              <span
                dangerouslySetInnerHTML={{
                  __html: featuredProjects[1].technologies,
                }}
              />
            </div>
            <IconContext.Provider
              value={{
                color: "#64FFDB",
                className: "global-class-name",
                size: "1.5rem",
              }}
            >
              <div className="secondProjectLinks">
                <a
                  href={featuredProjects[1].videoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaVideo />
                </a>{" "}
                &nbsp; &nbsp;
                <a
                  href={featuredProjects[1].githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </a>{" "}
                &nbsp; &nbsp;
                <a
                  href={featuredProjects[1].applicationLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLink />
                </a>
              </div>
            </IconContext.Provider>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="portfolioImage"
          >
            <div className="image">
              <a
                href={featuredProjects[1].applicationLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={SenteSol} alt="Logo" className="project-image" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-once="true" className="work-container">
        <h1 id="Work" className="title">
          &nbsp; Other noteworthy projects
        </h1>
      </div>
      <div className="otherProjects">
        {additionalProjects.map((project) => (

          <div key={project.id} data-aos="fade-up" data-aos-once="true" className="otherProject">
            {console.log(project.description)}
            <div className="otherProjectLinks">
              <div className="svg">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.3267 14.3333H36V10.1547C36 9.14999 35.1827 8.33332 34.1787 8.33332H17.6767L14.3433 3.66666H1.82133C0.817333 3.66666 0 4.48399 0 5.48799V34.6127H0.004C0.000666667 34.988 0.117333 35.3553 0.352 35.6627C0.678667 36.0893 1.17333 36.3333 1.71 36.3333H31.5493C32.32 36.3333 32.9987 35.814 33.1827 35.1247L40 16.4327V16.3147C40 15.1667 39.296 14.3333 38.3267 14.3333ZM1.33333 5.48799C1.33333 5.21866 1.55267 4.99999 1.82133 4.99999H13.6567L16.99 9.66666H34.178C34.4473 9.66666 34.666 9.88532 34.666 10.1547V14.3333H8.48733C8.39133 14.3333 8.296 14.3413 8.20333 14.3573C7.55467 14.466 7.01533 14.9393 6.85467 15.5413L1.33333 30.5993V5.48799ZM31.9127 34.722C31.8687 34.8853 31.7187 35 31.5493 35H1.71C1.548 35 1.45333 34.9073 1.41133 34.852C1.36933 34.7973 1.30467 34.6813 1.32933 34.58L8.12333 15.9447C8.16733 15.7813 8.31733 15.6667 8.48667 15.6667H36H38.3267C38.58 15.6667 38.6447 16.0307 38.6613 16.2127L31.9127 34.722Z"
                    fill="#64FFDB"
                  />
                </svg>
              </div>{" "}
              <div>
                <IconContext.Provider
                  value={{
                    color: "#64FFDB",
                    className: "global-class-name",
                    size: "1.4rem",
                  }}
                >
                  <div className="secondProjectLinks">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <h1 className="otherProjectTitle">{project.projectName} </h1>
            <p className="otherProjectContent"><span
                dangerouslySetInnerHTML={{
                  __html: project.description,
                }}
            /></p>

            <div className="projectTech">
              {project.technologies.map((item, i) => (<span key={i}>{item}&nbsp; &nbsp;</span> ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkPage
