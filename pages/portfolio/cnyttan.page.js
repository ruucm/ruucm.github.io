import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"

export default function Page(props) {
  return (
    <Layout>
      <Summary
        title="Cnyttan - Online Shopping Site"
        role="Developer"
        links={[
          {
            text: "Website",
            href: "https://cnyttan.com",
          },
        ]}
      />
    </Layout>
  )
}
