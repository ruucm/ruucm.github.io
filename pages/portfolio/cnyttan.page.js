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
          require("../../assets/cynttan_01.png"),
          require("../../assets/cynttan_02.png"),
          require("../../assets/cynttan_03.png"),
          require("../../assets/cynttan_04.png"),
        ]}
      />
    </Layout>
  )
}
