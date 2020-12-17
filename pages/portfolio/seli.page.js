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
          require("../../assets/seli_01.png"),
          require("../../assets/seli_02.png"),
          require("../../assets/seli_03.png"),
          require("../../assets/seli_04.png"),
        ]}
      />
      <div
        style={{
          height: 100,
        }}
      />
      <AnimateSharedLayout>
        <h4
          style={{
            textAlign: "right",
            fontWeight: 400,
            color: "blue",
          }}
        >
          Delight Writing Experience for Magazine Website
        </h4>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={require("../../assets/seli-cms-problem.png")}
            title="[Problems] - There are no excellent editors for Web projects."
            description={`When developing web projects from scratch, there is only an old WYSIWYG editor for the admin side. I think it could be progressed.`}
            // grayscale
          />
          <PortfolioSectionCard
            img={require("../../assets/seli-cms-notion.png")}
            title="[Solution] - Use Notion as CMS(Content Management System)"
            description={`I've seen many people use Notion(notion.so) as their daily notes, blogs, portfolios, even for job postings. And it has a straightforward block-style editing system. It seems much better it linked to the front-end, but there was no official API yet (2020). So I decided to develop my own for this project. I used Github CI (Continous Integration) to link changes from Notion to the website. Python3 was also a good choice for getting Notion contents and performances.`}
          />
        </div>
      </AnimateSharedLayout>
    </Layout>
  )
}
