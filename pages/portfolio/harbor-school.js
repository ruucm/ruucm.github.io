import { Layout } from "../../components"
import Link from "next/link"

export default function HarborSchoolPage(props) {
  return (
    <Layout>
      <h3>Harbor School</h3>
      <h4>Role - Founder/Developer</h4>
      <h4>
        Link -{" "}
        <a href="https://harbor.school" target="_blank">
          harbor.school
        </a>{" "}
        /{" "}
        <a href="https://class.harbor.school" target="_blank">
          class.harbor.school
        </a>
      </h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: "30px",
          marginBottom: 30,
        }}
      >
        <img
          src={require("../../assets/portfolio-1.jpeg")}
          style={{
            filter: "grayscale(1)",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            // border: "2px dashed black",
            padding: "30px 15px",
          }}
        >
          <h4>[Problems] - Education Content Experience</h4>I learn programming
          and design by myself with youtube videos and blog posts. But as a
          learner's view, there are solid problem on both side. On video side,
          it is always difficult to jump the point directly you want. If you
          find a just example line of code, watching video could be terrible
          experiences. On post side, it is easy to find information but
          sometimes post author could skip contents that makes students take a
          ton of times for finding why their project don't excuted like the
          post. So I started develop a new UI called "Video Explorer". I
          combines good points of video and post at the same time. It includes
          whole proccess of tutorial to make the results, and user can find
          information quickly like the blog posts.
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: "30px",
        }}
      >
        <img
          src={require("../../assets/portfolio-1.jpeg")}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            marginBottom: 30,
          }}
        />
        <div
          style={{
            padding: "30px 15px",
          }}
        >
          <h4>[Solution] - Video Explorer</h4>I learn programming and design by
          myself with youtube videos and blog posts. But as a learner's view,
          there are solid problem on both side. On video side, it is always
          difficult to jump the point directly you want. If you find a just
          example line of code, watching video could be terrible experiences. On
          post side, it is easy to find information but sometimes post author
          could skip contents that makes students take a ton of times for
          finding why their project don't excuted like the post. So I started
          develop a new UI called "Video Explorer". I combines good points of
          video and post at the same time. It includes whole proccess of
          tutorial to make the results, and user can find information quickly
          like the blog posts.
        </div>
      </div>

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
