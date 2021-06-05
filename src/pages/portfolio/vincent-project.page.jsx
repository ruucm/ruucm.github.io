import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"
import { Gallery } from "./components/gallery"
import vincent_01 from "../../assets/vincent_01.png"
import vincent_02 from "../../assets/vincent_02.png"
import vincent_03 from "../../assets/vincent_03.png"
import vincent_04 from "../../assets/vincent_04.png"

export function VincentProjectPage(props) {
  return (
    <Layout>
      <Summary />
      <Gallery images={[vincent_01, vincent_02, vincent_03, vincent_04]} />
    </Layout>
  )
}
