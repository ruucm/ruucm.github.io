import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"

export default function Page(props) {
  return (
    <Layout>
      <Summary
        title="Framer Korea"
        role="Developer / Motion Designer"
        links={[
          {
            text: "2019 Meetup Website",
            href: "https://framerkorea.org/are-you-having-fun/",
          },
          {
            text: "2020 Meetup Website",
            href: "https://framerkorea.org",
          },
        ]}
      />
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
          img={require("../../assets/framer-korea-2019.png")}
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
          img={require("../../assets/framer-korea-2020.png")}
          title=""
          description={`
          I developed whole websites using Gatsby.js. I prototyped motions of the website on Framer and moved it to the React development environment without hassle.`}
        />
      </AnimateSharedLayout>
    </Layout>
  )
}
