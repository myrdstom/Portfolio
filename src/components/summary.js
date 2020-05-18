import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const SummaryPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);
  return (
    <section className="summary-container" id="Summary">
      <div data-aos-delay="500" data-aos="fade-right" data-aos-once="true" >
        <h1>Hi</h1>
      </div>
      <div data-aos-delay="500" data-aos="fade-left" data-aos-once="true" >
        <h2>I'm Paul</h2>
      </div>
      <div data-aos-delay="500" data-aos="fade-right" data-aos-once="true" >
        <div>I create awesome experiences for the web</div>
      </div>
    </section>
  )
}

export default SummaryPage
