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
          require("../../assets/lighthouse_01.png"),
          require("../../assets/lighthouse_02.png"),
          require("../../assets/lighthouse_03.png"),
          require("../../assets/lighthouse_04.png"),
          require("../../assets/lighthouse_05.png"),
          require("../../assets/lighthouse_06.png"),
          require("../../assets/lighthouse_07.png"),
          require("../../assets/lighthouse_08.png"),
        ]}
      />
    </Layout>
  )
}
