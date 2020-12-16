import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"

export default function Page(props) {
  return (
    <Layout>
      <Summary
        role="Developer / System Designer"
        links={[
          {
            text: "Website",
            href: "https://lighthouse.harbor.school",
          },
        ]}
      />
    </Layout>
  )
}
