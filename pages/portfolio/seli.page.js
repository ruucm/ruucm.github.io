import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"

export default function Page(props) {
  return (
    <Layout>
      <Summary
        title="Seoul Lifelong Education Institute (SLEI)"
        role="Developer"
        links={[
          {
            text: "Website",
            href: "https://smile.seoul.kr/magazine",
          },
        ]}
      />
    </Layout>
  )
}
