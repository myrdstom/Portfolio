import React from "react"
import experienceStyles from "./experience.module.scss"

const ExperiencePage = () => {
  return (
    <section className={experienceStyles.container}>
      <h1 id="Experience">Experience</h1>
      <h1>Past and current jobs</h1>
      <div>
        <div className={experienceStyles.timeline}>
          <ul>
            <li
              className={experienceStyles.date}
              data-date="Oct 2019 - present"
            >
              <h1>Adam's Studio</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam architecto assumenda atque deleniti ea eum
                exercitationem fugit hic, itaque labore libero minus odio
                officia perferendis quam quidem tempore vel voluptate.
              </p>
            </li>
            <li
              className={experienceStyles.date}
              data-date="Nov 2018 - Sept 2019"
            >
              <h1>Andela</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo ipsam numquam totam! Aliquam aspernatur incidunt ipsum
                mollitia nostrum, rem sapiente sed? Aut corporis doloribus
                facere harum impedit iste officia quos?
              </p>
            </li>
            <li
              className={experienceStyles.date}
              data-date="Nov 2017 - Aug 2019"
            >
              <h1>March 5 Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi iste magni maxime perspiciatis repellat veritatis,
                voluptatibus. Alias aperiam esse, fuga fugiat, iste maxime minus
                nostrum numquam quaerat repellendus veniam vero!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperiencePage
