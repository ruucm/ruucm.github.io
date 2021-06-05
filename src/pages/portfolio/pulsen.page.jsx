import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"
import { Gallery } from "./components/gallery"
import pulsen from "../../assets/pulsen.gif"

export function PulsenPage(props) {
  return (
    <Layout>
      <Summary />
      <Gallery images={[pulsen]} />
    </Layout>
  )
}
