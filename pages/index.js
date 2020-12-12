import { Card, Layout } from "../components"

export default function Home() {
  return (
    <Layout>
      <h2>
        Hello
        <br />
        I'm yongmin ruucm.
      </h2>
      <h3>Design Engineer</h3>
      <p>I love designs and functions appears in digital gen.</p>
      <Card
        title="lighthouse design system"
        duration="2020 ~ "
        outlink="https://lighthouse.harbor.school"
      />
      <Card
        title="freelance works"
        duration="2014 ~ "
        link="/portfolio/freelance-works"
      />
      <Card
        title="harbor.school"
        duration="2018 ~ "
        link="/portfolio/harbor-school"
      />
      <Card
        title="vincent project"
        duration="2014 ~ 2016"
        outlink="https://www.instagram.com/vincent.project/"
      />
    </Layout>
  )
}
