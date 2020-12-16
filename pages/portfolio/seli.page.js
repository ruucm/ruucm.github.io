import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"

export default function Page(props) {
  return (
    <Layout>
      <Summary
        title="Seoul Lifelong Education Institute (SLEI)"
        role="Developer"
        links={[
          {
            text: "Website",
            href: "https://smile.seoul.kr/magazine",
          },
        ]}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginTop: 30,
          gap: 30,
          marginBottom: 30,
        }}
      >
        <img
          src={require("../../assets/seli_01.png")}
          style={{
            width: "100%",
            display: "block",
            border: "1px solid black",
          }}
        />
        <img
          src={require("../../assets/seli_02.png")}
          style={{
            width: "100%",
            display: "block",
            border: "1px solid black",
          }}
        />
        <img
          src={require("../../assets/seli_03.png")}
          style={{
            width: "100%",
            display: "block",
            border: "1px solid black",
          }}
        />
        <img
          src={require("../../assets/seli_04.png")}
          style={{
            width: "100%",
            display: "block",
            border: "1px solid black",
          }}
        />
      </div>
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
            title="[Problems] - Bad Education Content Experience"
            description={`I learn programming and design by myself with youtube videos and blog
        posts. But as a learner's view, there are solid problem on both side.
        On video side, it is always difficult to jump the point directly you
        want. If you find a just example line of code, watching video could be
        terrible experiences. On post side, it is easy to find information but
        sometimes post author could skip contents that makes students take a
        ton of times for finding why their project don't excuted like the
        post.`}
            // grayscale
          />
          <PortfolioSectionCard
            img={require("../../assets/seli-cms-notion.png")}
            title="[Solution] - Video Explorer"
            description={`So I started develop a new UI called "Video Explorer". I combines good
      points of video and post at the same time. It includes whole proccess
      of tutorial to make the results, and user can find information quickly
      like the blog posts.`}
          />
        </div>
      </AnimateSharedLayout>
    </Layout>
  )
}
