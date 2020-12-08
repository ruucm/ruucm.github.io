import Link from "next/link"
import { Card } from "../components/card"

export default function Home() {
  return (
    <div>
      Hello
      <br />
      I'm yongmin ruucm.
      <br />
      Design Engineer
      <br />
      {/* Navigation */}
      <Link href="/carving">
        <a>Carving</a>
      </Link>{" "}
      /{" "}
      <Link href="/media">
        <a>Media</a>
      </Link>
      <br />
      <Card
        title="Freelance Works"
        duration="2014 ~ "
        link="/freelance-works"
      />
      <Card
        title="harbor.school"
        duration="2018 ~ "
        outlink="https://harbor.school"
      />
      <Card
        title="vincent project"
        duration="2014 ~ 2016"
        outlink="https://www.instagram.com/vincent.project/"
      />
      <footer>
        <a href="http://twitter.com/ruucm" target="_blank">
          @ruucm
        </a>
      </footer>
    </div>
  )
}
