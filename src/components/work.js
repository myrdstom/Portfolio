import React from "react"

import OctoProfile from "../assets/images/octoProfile.png"
import Listicle from "../assets/images/listicle.png"

import { FaGithub, FaLink, FaVideo } from "react-icons/fa"
import { IconContext } from "react-icons"

const WorkPage = () => {
  return (
    <section className="work-section">
      <div className="work-container">
        <h1 id="Work" className="title">
          Some things I've built
        </h1>
      </div>
      <div className="featuredProjects">
        <div className="featuredProject">
          <div className="portfolioImage">
            <div className="image">
              <a
                href="https://develop.d3lkpp5sspoxme.amplifyapp.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={OctoProfile} alt="Logo" className="project-image" />
              </a>
            </div>
          </div>
          <div className="content">
            <div className="firstSmallHeading">
              <h1 className="smallHeading">Featured Project</h1>
              <h1 className="largeHeading">OctoProfile</h1>
            </div>
            <div className="portfolioImage">
              <div className="refactoredImage">
                <div className="octo-project-image">
                  {" "}
                  <a
                    href="https://listicle-react.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  />
                </div>
              </div>
            </div>
            <p>
              A nicer look at your GitHub profile and repos.
              <br />
              It Includes a summary of your bio, data visualizations of your top
              languages and most stared repos, and a list of all your most
              popular repos
            </p>
            <div className="firstProject">
              React.js &nbsp; &nbsp; Github API
            </div>
            <IconContext.Provider
              value={{
                color: "rgb(204, 214, 246)",
                className: "global-class-name",
                size: "1.5rem",
              }}
            >
              <div className="firstProjectLinks">
                <a
                  className="favicon"
                  href="https://github.com/myrdstom"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaVideo />
                </a>{" "}
                &nbsp; &nbsp;
                <a
                  href="https://github.com/myrdstom/Octo-Profile"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </a>{" "}
                &nbsp; &nbsp;
                <a
                  href="https://develop.d3lkpp5sspoxme.amplifyapp.com"
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
          <div className="content">
            <h1 className="smallHeading">Featured Project</h1>
            <h1 className="largeHeading">Listicle </h1>
            <div className="portfolioImage">
              <div className="refactoredImage">
                <div className="listicle-project-image">
                  {" "}
                  <a
                    href="https://listicle-react.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  />
                </div>
              </div>
            </div>
            <p>
              Listicle brings all bloggers and blogs under one roof. From
              technology to relationships, climate change to business, bloggers
              around the world can showcase their articles and reviews
            </p>
            <div className="secondProject">
              React.js &nbsp;&nbsp; Node.js &nbsp;&nbsp; Express &nbsp;&nbsp;
              MongoDB &nbsp;&nbsp; Cloudiniary API
            </div>
            <IconContext.Provider
              value={{
                color: "rgb(204, 214, 246)",
                className: "global-class-name",
                size: "1.5rem",
              }}
            >
              <div className="secondProjectLinks">
                <a
                  href="https://github.com/myrdstom"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaVideo />
                </a>{" "}
                &nbsp; &nbsp;
                <a
                  href="https://github.com/myrdstom/listicle-react"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </a>{" "}
                &nbsp; &nbsp;
                <a
                  href="https://listicle-react.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLink />
                </a>
              </div>
            </IconContext.Provider>
          </div>
          <div className="portfolioImage">
            <div className="image">
              <a
                href="https://listicle-react.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Listicle} alt="Logo" className="project-image" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="work-container">
        <h1 id="Work" className="title">
          Other noteworthy projects
        </h1>
      </div>
      <div className="otherProjects">
        <div className="otherProject">
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
                  color: "rgb(204, 214, 246)",
                  className: "global-class-name",
                  size: "1.4rem",
                }}
              >
                <div className="secondProjectLinks">
                  <a
                    href="https://github.com/Podcastup"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithub />
                  </a>{" "}
                  &nbsp; &nbsp;
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <h1 className="otherProjectTitle">Podcaster</h1>
          <p className="otherProjectContent">
            Podcaster aggregates and displays a multitude of podcasts from
            various resources in one place giving the user a larger selection of
            podcasts to pick from
          </p>
          <div className="projectTech">
            TypeScript &nbsp;&nbsp; React.js &nbsp;&nbsp; Node.js &nbsp;&nbsp;
            Express &nbsp;&nbsp; PostgreSQL
          </div>
        </div>
        <div className="otherProject">
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
                  color: "rgb(204, 214, 246)",
                  className: "global-class-name",
                  size: "1.4rem",
                }}
              >
                <div className="secondProjectLinks">
                  <a
                    href="https://github.com/myrdstom/store-manager"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithub />
                  </a>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <h1 className="otherProjectTitle">Pizzaforte </h1>
          <p className="otherProjectContent">
            A simple chrome extension that tracks a user's actions on &nbsp;
            <a
              href="https://pizzaforte.hu"
              className="pizzaforte"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              pizzaforte
            </a>
            &nbsp; as they place various orders
          </p>
          <div className="projectTech">
            JavaScript &nbsp;&nbsp; Google Chrome Extension
          </div>
        </div>
        <div className="otherProject">
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
            <div className="favicon">
              <IconContext.Provider
                value={{
                  color: "rgb(204, 214, 246)",
                  className: "global-class-name",
                  size: "1.4rem",
                }}
              >
                <div className="secondProjectLinks">
                  <a
                    href="https://github.com/myrdstom/pizzaforteChromeExtension"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithub />
                  </a>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <h1 className="otherProjectTitle">Store Manager </h1>
          <p className="otherProjectContent">
            Store Manager is a web application that helps store owners manage
            sales and product inventory records.
          </p>
          <div className="projectTech">
            Python &nbsp;&nbsp; Flask &nbsp;&nbsp; SQL Queries &nbsp;&nbsp;
            PostgreSQL
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkPage
