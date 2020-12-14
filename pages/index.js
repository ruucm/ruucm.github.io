import { useState } from "react"
import { Card, Layout } from "../components"
import { cardDatas } from "../consts"
import { AnimateSharedLayout } from "framer-motion"
import shuffle from "lodash.shuffle"

export default function Home() {
  const [data, setData] = useState(cardDatas)
  const shuffleList = () => setData(shuffle(data))
  return (
    <Layout>
      <h3>Design Engineer</h3>
      <p>
        Yongmin Ji is an experienced front-end developer with a designer's
        mindset.
      </p>
      <AnimateSharedLayout>
        <em
          onClick={shuffleList}
          style={{ display: "block", textAlign: "right", cursor: "pointer" }}
        >
          shuffle
        </em>
        {data.map((data, id) => (
          <Card
            key={id}
            title={data.title}
            duration={data.duration}
            description={data.description}
            outlink={data.outlink}
            link={data.link}
          />
        ))}
      </AnimateSharedLayout>
    </Layout>
  )
}
