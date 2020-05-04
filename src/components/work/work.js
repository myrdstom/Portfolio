import React from "react"
import workStyles from "./work.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

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
              <Img
                fluid={data.octoProfile.childImageSharp.fluid}
                alt="This is a picture of my face."
              />
            </div>
          </div>
          <div className={workStyles.content}>
            <h1 className={workStyles.smallHeading}>Featured Project</h1>
            <h1 className={workStyles.largeHeading}>OctoProfile</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              deleniti inventore libero maiores minus non omnis saepe sapiente
              suscipit vel. Architecto autem cumque explicabo ipsum, odit quia
              saepe sequi similique!
            </p>
            <Link to="https://github.com/myrdstom/Octo-Profile">Github</Link>
            <Link to="https://develop.d3lkpp5sspoxme.amplifyapp.com">
              website
            </Link>
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
            <Link to="https://github.com/myrdstom/listicle-react">Github</Link>
            <Link to="https://listicle-react.herokuapp.com/">website</Link>
          </div>
          <div className={workStyles.portfolioImage}>
            <div className={workStyles.image}>
              <Img
                fluid={data.listicle.childImageSharp.fluid}
                alt="This is a picture of my face."
              />
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
          <h1 className={workStyles.otherProjectTitle}>Podcaster</h1>
          <p className={workStyles.otherProjectContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quod similique vel voluptates! Amet animi dolore incidunt itaque non
            officiis tempora! Beatae dolore impedit ipsa necessitatibus
            perferendis. Cum, explicabo, sit.
          </p>
        </div>
        <div className={workStyles.otherProject}>
          <h1 className={workStyles.otherProjectTitle}>pizzaforte </h1>
          <p className={workStyles.otherProjectContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quod similique vel voluptates! Amet animi dolore incidunt itaque non
            officiis tempora! Beatae dolore impedit ipsa necessitatibus
            perferendis. Cum, explicabo, sit.
          </p>
        </div>
        <div className={workStyles.otherProject}>
          <h1 className={workStyles.otherProjectTitle}>Store Manager </h1>
          <p className={workStyles.otherProjectContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quod similique vel voluptates! Amet animi dolore incidunt itaque non
            officiis tempora! Beatae dolore impedit ipsa necessitatibus
            perferendis. Cum, explicabo, sit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WorkPage
