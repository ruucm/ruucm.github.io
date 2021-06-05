import { useState } from "react"
import { Card, Layout } from "../components"
import { cardDatas } from "../consts"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { removeA } from "../utils/removeA"

export function HomePage() {
  const [data, setData] = useState(cardDatas)
  const [tags, setTags] = useState(["develop", "design", "marketing"])

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
            className={`tags ${tags.includes("develop") && "active"}`}
            style={{
              cursor: "pointer",
              marginLeft: 10,
            }}
            onClick={() =>
              setTags(
                tags.includes("develop")
                  ? removeA(tags, "develop")
                  : [...tags, "develop"]
              )
            }
          >
            Develop
          </em>
          <em
            className={`tags ${tags.includes("design") && "active"}`}
            style={{
              cursor: "pointer",
              marginLeft: 10,
            }}
            onClick={() =>
              setTags(
                tags.includes("design")
                  ? removeA(tags, "design")
                  : [...tags, "design"]
              )
            }
          >
            Design
          </em>
          <em
            className={`tags ${tags.includes("marketing") && "active"}`}
            style={{
              cursor: "pointer",
              marginLeft: 10,
            }}
            onClick={() =>
              setTags(
                tags.includes("marketing")
                  ? removeA(tags, "marketing")
                  : [...tags, "marketing"]
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
                  slug={item.slug}
                  // link={item.key && `/portfolio/${item.key}`}
                  tags={item.tags}
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
    if (tags.includes(tag)) return true
  }
}
