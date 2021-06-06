import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"
import { Gallery } from "./components/gallery"
import seli_01 from "../../assets/seli_01.png"
import seli_02 from "../../assets/seli_02.png"
import seli_03 from "../../assets/seli_03.png"
import seli_04 from "../../assets/seli_04.png"
import seli_cms_problem from "../../assets/seli-cms-problem.png"
import seli_cms_notion from "../../assets/seli-cms-notion.png"
import { SubTitle } from "./components/sub-title"

export function SLEIPage(props) {
  return (
    <Layout>
      <Summary />
      <Gallery images={[seli_01, seli_02, seli_03, seli_04]} />
      <div
        style={{
          height: 100,
        }}
      />
      <AnimateSharedLayout>
        <SubTitle>Delight Writing Experience for Magazine Website</SubTitle>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={seli_cms_problem}
            title="[Problems] - There are no excellent editors for Web projects."
            description={`When developing web projects from scratch, there is only an old WYSIWYG editor for the admin side. I think it could be progressed.`}
            // grayscale
          />
          <PortfolioSectionCard
            img={seli_cms_notion}
            title="[Solution] - Use Notion as CMS(Content Management System)"
            description={`I've seen many people use Notion(notion.so) as their daily notes, blogs, portfolios, even for job postings. And it has a straightforward block-style editing system. It seems much better it linked to the front-end, but there was no official API yet (2020). So I decided to develop my own for this project. I used Github CI (Continous Integration) to link changes from Notion to the website. Python3 was also a good choice for getting Notion contents and performances.`}
          />
        </div>
      </AnimateSharedLayout>
    </Layout>
  )
}
