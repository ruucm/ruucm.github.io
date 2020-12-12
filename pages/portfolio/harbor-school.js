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
        </a>
      </h4>
      <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>Home</a>
        </Link>
      </div>
    </Layout>
  )
}
