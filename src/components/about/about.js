import React from "react"
import aboutStyles from "./about.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "profilePicture.png" }) {
        childImageSharp {
          fluid(maxWidth: 125, maxHeight: 125, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.profilePicture}>
          <Img
            fluid={data.profilePicture.childImageSharp.fluid}
            alt="This is a picture of my face."
          />
        </div>
        <div className={aboutStyles.details}>
          <div className={aboutStyles.heading}>
            <h1 className={aboutStyles.largeHeading}>About</h1>
            <h1 className={aboutStyles.smallHeading}>Myself</h1>
          </div>

          <p className={aboutStyles.content}>
            {" "}
            <div className={aboutStyles.contentTitle}>I'm a product designer based in  Kampala, Uganda.</div>I
            enjoy turning complex problems into simple, beautiful and intuitive
            and performant experiences. Here are a few technologies I've been
            working with recently
            <div className={aboutStyles.tech}>
              <div>
                <ul>
                  <li>Javascript (ES6+)</li>
                  <li>React</li>
                  <li>Node</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>TypeScript</li>
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
