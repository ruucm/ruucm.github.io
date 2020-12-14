import { Card, Layout } from "../components"
import { cardDatas } from "../consts"

export default function Home() {
  return (
    <Layout>
      <h3>Design Engineer</h3>
      <p>
        Yongmin Ji is an experienced front-end developer with a designer's
        mindset.
      </p>
      <div>
        {cardDatas.map((data, id) => (
          <Card
            title={data.title}
            duration={data.duration}
            description={data.description}
            outlink={data.outlink}
            link={data.link}
          />
        ))}
      </div>
    </Layout>
  )
}
