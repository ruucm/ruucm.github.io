import { useState } from "react"
import { Card, Layout } from "../components"
import { cardDatas } from "../consts"
import { AnimateSharedLayout } from "framer-motion"
import shuffle from "lodash.shuffle"

export default function Home() {
  const [data, setData] = useState(cardDatas)
  const [isGrid, setIsGrid] = useState(false)
  const shuffleList = () => setData(shuffle(data))
  return (
    <Layout home>
      <h3>Design Engineer</h3>
      <p>
        yongmin ruucm is an experienced front-end developer with a designer's
        mindset.
      </p>
      <AnimateSharedLayout>
        <div
          style={{
            textAlign: "right",
            marginBottom: 7,
          }}
        >
          {/* <em
            onClick={() => setIsGrid(!isGrid)}
            style={{
              cursor: "pointer",
              marginRight: 10,
            }}
          >
            {isGrid ? "⊞" : "⊟"}
          </em> */}
          <em
            onClick={shuffleList}
            style={{
              cursor: "pointer",
            }}
          >
            ⥂
          </em>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isGrid ? "repeat(3, 1fr)" : "1fr",
            gap: "20px",
          }}
        >
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
        </div>
      </AnimateSharedLayout>
    </Layout>
  )
}
