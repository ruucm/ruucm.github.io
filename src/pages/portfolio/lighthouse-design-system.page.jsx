import React from "react"
import { Layout } from "../../components"
import { Summary } from "./components/summary"
import { Gallery } from "./components/gallery"
import lighthouse_01 from "../../assets/lighthouse_01.png"
import lighthouse_02 from "../../assets/lighthouse_02.png"
import lighthouse_03 from "../../assets/lighthouse_03.png"
import lighthouse_04 from "../../assets/lighthouse_04.png"
import lighthouse_05 from "../../assets/lighthouse_05.png"
import lighthouse_06 from "../../assets/lighthouse_06.png"
import lighthouse_07 from "../../assets/lighthouse_07.png"
import lighthouse_08 from "../../assets/lighthouse_08.png"
import { Helmet } from "react-helmet-async"

export function LighthouseDesignSystemPage() {
  return (
    <Layout>
      <Helmet>
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={lighthouse_01} />
      </Helmet>
      <Summary />
      <Gallery
        images={[
          lighthouse_01,
          lighthouse_02,
          lighthouse_03,
          lighthouse_04,
          lighthouse_05,
          lighthouse_06,
          lighthouse_07,
          lighthouse_08,
        ]}
      />
    </Layout>
  )
}
