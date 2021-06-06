import { Layout } from "../../components"
import { PortfolioSectionCard } from "./components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "./components/summary"
import problem_youtube from "../../assets/problem-youtube.png"
import solution_video_explorer from "../../assets/solution-video-explorer.gif"
import problem_students_management from "../../assets/problem-students-management.png"
import solution_students_management from "../../assets/solution-students-management.png"
import { SubTitle } from "./components/sub-title"

export function HarborSchoolPage(props) {
  return (
    <Layout>
      <Summary />
      <AnimateSharedLayout>
        <SubTitle>Education Content Experience</SubTitle>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={problem_youtube}
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
            img={solution_video_explorer}
            title="[Solution] - Video Explorer"
            description={`So I started develop a new UI called "Video Explorer". I combines good
      points of video and post at the same time. It includes whole proccess
      of tutorial to make the results, and user can find information quickly
      like the blog posts.`}
          />
        </div>

        <SubTitle>Internal Student Management System</SubTitle>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={problem_students_management}
            title="[Problems] - Seperated CRM and Student Managements"
            description={`I had to offer CRM(Customer relationship management) with student's achievement dashboard.`}
            // grayscale
            // alignRight
          />

          <PortfolioSectionCard
            img={solution_students_management}
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
