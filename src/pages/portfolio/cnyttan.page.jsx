import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"
import { Gallery } from "./components/gallery"
import cynttan_01 from "../../assets/cynttan_01.png"
import cynttan_02 from "../../assets/cynttan_02.png"
import cynttan_03 from "../../assets/cynttan_03.png"
import cynttan_04 from "../../assets/cynttan_04.png"

export function CnyttanPage(props) {
  return (
    <Layout>
      <Summary />
      <Gallery images={[cynttan_01, cynttan_02, cynttan_03, cynttan_04]} />
      <p>
        I handled whole WordPress shopping functions (cart, checkout, refund,
        membership, shipping) as REST API for making dynamic checkout front page
        with React.
      </p>
    </Layout>
  )
}
