import { useState } from "react"
import { Card, Layout } from "../components"
import { cardDatas } from "../consts"
import { AnimateSharedLayout } from "framer-motion"
import shuffle from "lodash.shuffle"
import { removeA } from "../utils/removeA"

export default function Home() {
  const [data, setData] = useState(cardDatas)
  const [isGrid, setIsGrid] = useState(false)
  const shuffleList = () => setData(shuffle(data))
  const [tags, setTags] = useState(["design", "develop", "marketing"])

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
          </em>
          <span
            onClick={shuffleList}
            style={{
              cursor: "pointer",
              filter: "grayscale(1)",
            }}
          >
            🔀
          </span> */}
          <em
            className={`tags ${tags.includes("design") && "active"}`}
            style={{
              cursor: "pointer",
              marginLeft: 10,
            }}
            onClick={() =>
              setTags((prev) =>
                prev.includes("design")
                  ? removeA(prev, "design")
                  : [...prev, "design"]
              )
            }
          >
            Design
          </em>
          <em
            className={`tags ${tags.includes("develop") && "active"}`}
            style={{
              cursor: "pointer",
              marginLeft: 10,
            }}
            onClick={() =>
              setTags((prev) =>
                prev.includes("develop")
                  ? removeA(prev, "develop")
                  : [...prev, "develop"]
              )
            }
          >
            Develop
          </em>
          <em
            className={`tags ${tags.includes("marketing") && "active"}`}
            style={{
              cursor: "pointer",
              marginLeft: 10,
            }}
            onClick={() =>
              setTags((prev) =>
                prev.includes("marketing")
                  ? removeA(prev, "marketing")
                  : [...prev, "marketing"]
              )
            }
          >
            Marketing
          </em>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isGrid ? "repeat(3, 1fr)" : "1fr",
            gap: "20px",
          }}
        >
          {data
            .filter((item) => {
              for (let i = 0; i < item.tags.length; i++) {
                const tag = item.tags[i]
                if (tags.includes(tag)) return true
              }
            })
            .map((item, id) => (
              <Card
                key={id}
                title={item.title}
                duration={item.duration}
                description={item.description}
                outlink={item.outlink}
                link={item.link}
              />
            ))}
        </div>
      </AnimateSharedLayout>
    </Layout>
  )
}
