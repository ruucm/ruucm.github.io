import { useState } from "react"
import { Card, Layout } from "../components"
import { cardDatas } from "../consts"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { removeA } from "../utils/removeA"

export default function Home() {
  const [data, setData] = useState(cardDatas)
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
            gridTemplateColumns: "1fr",
            gap: "20px",
          }}
        >
          {data.map((item, id) => (
            <AnimatePresence key={id}>
              {tagFilter(tags, item) && (
                <Card
                  title={item.title}
                  duration={item.duration}
                  description={item.description}
                  outlink={item.outlink}
                  link={item.link}
                />
              )}
            </AnimatePresence>
          ))}
        </div>
      </AnimateSharedLayout>
    </Layout>
  )
}

function tagFilter(tags, item) {
  for (let i = 0; i < item.tags.length; i++) {
    const tag = item.tags[i]
    console.log("tags.includes(tag)", tags.includes(tag))
    if (tags.includes(tag)) return true
  }
}
