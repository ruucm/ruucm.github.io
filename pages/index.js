import { Card, Layout } from "../components"

export default function Home() {
  return (
    <Layout>
      <h3>Design Engineer</h3>
      {/* <p>I love designs and functions appears in digital gen.</p> */}
      <p>
        Yongmin Ji is an experienced front-end developer with a designer's
        mindset.
      </p>
      <Card
        title="lighthouse design system"
        duration="2020 ~ "
        outlink="https://lighthouse.harbor.school"
      />
      <Card
        title="framer korea"
        duration="2018 ~ "
        outlink="https://framerkorea.org/"
      />
      <Card
        title="harbor.school"
        duration="2018 ~ 2020"
        link="/portfolio/harbor-school"
      />
      <Card
        title="freelance works"
        duration="2014 ~ "
        link="/portfolio/freelance-works"
      />
      <Card
        title="vincent project"
        duration="2014 ~ 2016"
        outlink="https://www.instagram.com/vincent.project/"
      />
    </Layout>
  )
}
