import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"

export default function HarborSchoolPage(props) {
  return (
    <Layout>
      <Summary
        title="Harbor School"
        role="Founder/Developer"
        links={[
          {
            text: "harbor.school",
            href: "https://beta.harbor.school",
          },
          {
            text: "class.harbor.school",
            href: "https://class.harbor.school",
          },
        ]}
      />
      <AnimateSharedLayout>
        <h4
          style={{
            textAlign: "right",
            fontWeight: 400,
            color: "blue",
          }}
        >
          Education Content Experience
        </h4>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={require("../../assets/problem-youtube.png")}
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
            img={require("../../assets/solution-video-explorer.gif")}
            title="[Solution] - Video Explorer"
            description={`So I started develop a new UI called "Video Explorer". I combines good
      points of video and post at the same time. It includes whole proccess
      of tutorial to make the results, and user can find information quickly
      like the blog posts.`}
          />
        </div>

        <h4
          style={{
            textAlign: "right",
            fontWeight: 400,
            color: "blue",
          }}
        >
          Internal Student Management System
        </h4>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={require("../../assets/problem-students-management.png")}
            title="[Problems] - Seperated CRM and Student Managements"
            description={`I had to offer CMS(Content Management System) with student's dashboard.`}
            // grayscale
            // alignRight
          />

          <PortfolioSectionCard
            img={require("../../assets/solution-students-management.png")}
            title="[Solution] - Student Management System"
            description={`And I need to collect latest resources for students. But we had only one
            junior developer and me with limited time.
            I started to find the fastest and reliable method for that
            problem.`}
            // alignRight
          />
        </div>
      </AnimateSharedLayout>
    </Layout>
  )
}
