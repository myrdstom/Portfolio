import React from "react"
import workStyles from "./work.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaGithub, FaLink, FaVideo } from "react-icons/fa"
import { IconContext } from "react-icons"
import Folder from '../../assets/images/folder.svg'

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query {
      octoProfile: file(relativePath: { eq: "octoProfile.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      listicle: file(relativePath: { eq: "listicle.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section>
      <div className={workStyles.container}>
        <h1 id="Work" className={workStyles.title}>
          Some things I've built
        </h1>
      </div>
      <div className={workStyles.featuredProjects}>
        <div className={workStyles.featuredProject}>
          <div className={workStyles.portfolioImage}>
            <div className={workStyles.image}>
              <a
                href="https://develop.d3lkpp5sspoxme.amplifyapp.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img
                  fluid={data.octoProfile.childImageSharp.fluid}
                  alt="This is a picture of my face."
                />
              </a>
            </div>
          </div>
          <div className={workStyles.content}>
            <div className={workStyles.firstSmallHeading}>
              <h1 className={workStyles.smallHeading}>Featured Project</h1>
              <h1 className={workStyles.largeHeading}>OctoProfile</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              deleniti inventore libero maiores minus non omnis saepe sapiente
              suscipit vel. Architecto autem cumque explicabo ipsum, odit quia
              saepe sequi similique!
            </p>
            <div className={workStyles.firstProject}>
              React.js &nbsp; &nbsp; Github API
            </div>
            <IconContext.Provider
              value={{
                color: "rgb(204, 214, 246)",
                className: "global-class-name",
                size: "1.5rem",
              }}
            >
              <div className={workStyles.firstProjectLinks}>
                <a
                  className={workStyles.favicon}
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
        <div className={workStyles.featuredProject}>
          <div className={workStyles.content}>
            <h1 className={workStyles.smallHeading}>Featured Project</h1>
            <h1 className={workStyles.largeHeading}>Listicle </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              animi culpa cum debitis eligendi maxime minus quaerat rerum saepe
              tempora. Ea et facilis fuga illo in ipsum iure neque ratione!
            </p>
            <div className={workStyles.secondProject}>
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
              <div className={workStyles.secondProjectLinks}>
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
          <div className={workStyles.portfolioImage}>
            <div className={workStyles.image}>
              <a
                href="https://listicle-react.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img
                  fluid={data.listicle.childImageSharp.fluid}
                  alt="This is a picture of my face."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={workStyles.container}>
        <h1 id="Work" className={workStyles.title}>
          Other noteworthy projects
        </h1>
      </div>
      <div className={workStyles.otherProjects}>
        <div className={workStyles.otherProject}>
          <div className={workStyles.otherProjectLinks}>
            <div className={workStyles.svg}><Folder/></div>{" "}
            <div>
              <IconContext.Provider
                value={{
                  color: "rgb(204, 214, 246)",
                  className: "global-class-name",
                  size: "1.4rem",
                }}
              >
                <div className={workStyles.secondProjectLinks}>
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
          <h1 className={workStyles.otherProjectTitle}>Podcaster</h1>
          <p className={workStyles.otherProjectContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quod similique vel voluptates! Amet animi dolore incidunt itaque non
            officiis tempora! Beatae dolore impedit ipsa necessitatibus
            perferendis. Cum, explicabo, sit.
          </p>
          <div className={workStyles.projectTech}>
            TypeScript &nbsp;&nbsp; React.js &nbsp;&nbsp; Node.js &nbsp;&nbsp; Express &nbsp;&nbsp;
            PostgreSQL
          </div>
        </div>
        <div className={workStyles.otherProject}>
          <div className={workStyles.otherProjectLinks}>
            <div className={workStyles.svg}><Folder/></div>{" "}
            <div>
              <IconContext.Provider
                  value={{
                    color: "rgb(204, 214, 246)",
                    className: "global-class-name",
                    size: "1.4rem",
                  }}
              >
                <div className={workStyles.secondProjectLinks}>
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
          <h1 className={workStyles.otherProjectTitle}>Pizzaforte </h1>
          <p className={workStyles.otherProjectContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quod similique vel voluptates! Amet animi dolore incidunt itaque non
            officiis tempora! Beatae dolore impedit ipsa necessitatibus
            perferendis. Cum, explicabo, sit.
          </p>
          <div className={workStyles.projectTech}>
            JavaScript &nbsp;&nbsp; Google Chrome Extension
          </div>
        </div>
        <div className={workStyles.otherProject}>
          <div className={workStyles.otherProjectLinks}>
            <div className={workStyles.svg}><Folder/></div>{" "}
            <div className={workStyles.favicon}>
              <IconContext.Provider
                  value={{
                    color: "rgb(204, 214, 246)",
                    className: "global-class-name",
                    size: "1.4rem",
                  }}
              >
                <div className={workStyles.secondProjectLinks}>
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
          <h1 className={workStyles.otherProjectTitle}>Store Manager </h1>
          <p className={workStyles.otherProjectContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quod similique vel voluptates! Amet animi dolore incidunt itaque non
            officiis tempora! Beatae dolore impedit ipsa necessitatibus
            perferendis. Cum, explicabo, sit.
          </p>
          <div className={workStyles.projectTech}>
            Python &nbsp;&nbsp; Flask &nbsp;&nbsp;
            SQL Queries &nbsp;&nbsp; PostgreSQL
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkPage
