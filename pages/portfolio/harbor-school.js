import { Layout } from "../../components"
import { PortfolioSectionCard } from "../../components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"

export default function HarborSchoolPage(props) {
  return (
    <Layout>
      <h3>Harbor School</h3>
      <p>Role - Founder/Developer</p>
      <p>
        Link -{" "}
        <a
          href="https://harbor.school"
          target="_blank"
          style={{
            color: "black",
          }}
        >
          harbor.school
        </a>{" "}
        /{" "}
        <a
          href="https://class.harbor.school"
          target="_blank"
          style={{
            color: "black",
          }}
        >
          class.harbor.school
        </a>
      </p>
      <AnimateSharedLayout>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={require("../../assets/problem-youtube.png")}
            title="[Problems] - Education Content Experience"
            description={`I learn programming and design by myself with youtube videos and blog
        posts. But as a learner's view, there are solid problem on both side.
        On video side, it is always difficult to jump the point directly you
        want. If you find a just example line of code, watching video could be
        terrible experiences. On post side, it is easy to find information but
        sometimes post author could skip contents that makes students take a
        ton of times for finding why their project don't excuted like the
        post.`}
            grayscale
          />

          <PortfolioSectionCard
            img={require("../../assets/solution-video-explorer.gif")}
            title="[Solution] - Video Explorer"
            description={`So I started develop a new UI called "Video Explorer". I combines good
      points of video and post at the same time. It includes whole proccess
      of tutorial to make the results, and user can find information quickly
      like the blog posts.`}
          />
        </div>
      </AnimateSharedLayout>

      {/* Harbor School is education platform for designers.  */}
      {/* <h4>[Solving Problems using Software] - Student Management System</h4>
      <p>
        I had to offer CMS(Content Management System) with student's dashboard.
        <br />
        And I need to collect latest resources for students. But we had only one
        junior developer and me with limited time.
        <br />I started to find the fastest and reliable method for that
        problem.
      </p> */}
    </Layout>
  )
}
