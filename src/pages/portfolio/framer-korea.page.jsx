import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"
import framer_korea_2019 from "../../assets/framer-korea-2019.png"
import framer_korea_2020 from "../../assets/framer-korea-2020.png"

export function FramerKoreaPage(props) {
  return (
    <Layout>
      <Summary />
      <AnimateSharedLayout>
        <h4
          style={{
            textAlign: "right",
            fontWeight: 400,
            color: "blue",
          }}
        >
          2019 Framer Korea Meetup Website
        </h4>
        <PortfolioSectionCard
          img={framer_korea_2019}
          title=""
          description={`I developed whole websites using Gatsby.js with the other junior developer. I used Framer to communicate with a designer for motion.

          It also supports bilingual en/ko without losing the website's speed.
          `}
        />

        <h4
          style={{
            textAlign: "right",
            fontWeight: 400,
            color: "blue",
          }}
        >
          2020 Framer Korea Meetup Website
        </h4>
        <PortfolioSectionCard
          img={framer_korea_2020}
          title=""
          description={`
          I developed whole websites using Gatsby.js. I prototyped motions of the website on Framer and moved it to the React development environment without hassle.`}
        />
      </AnimateSharedLayout>
    </Layout>
  )
}
