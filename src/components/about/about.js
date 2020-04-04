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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            culpa deleniti et magni maxime minima, nesciunt, nihil nulla numquam
            qui quibusdam rem. Ad cupiditate excepturi facilis fugiat fugit
            quaerat repellat.
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutPage
