import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"

export default function Page(props) {
  return (
    <Layout>
      <Summary
        role="Developer"
        links={[
          {
            text: "Demo",
            href: "https://pulsen.netlify.app/?token=demo",
          },
        ]}
      />
    </Layout>
  )
}
