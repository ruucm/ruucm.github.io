import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"
import { Gallery } from "./components/gallery"

export default function Page(props) {
  return (
    <Layout>
      <Summary />
      <Gallery
        images={[
          require("../../assets/vincent_01.png"),
          require("../../assets/vincent_02.png"),
          require("../../assets/vincent_03.png"),
          require("../../assets/vincent_04.png"),
        ]}
      />
    </Layout>
  )
}
