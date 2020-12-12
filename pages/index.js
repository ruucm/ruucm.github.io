import Link from "next/link"
import { Card } from "../components/card"

export default function Home() {
  return (
    <div>
      <h2>
        Hello
        <br />
        I'm yongmin ruucm.
      </h2>
      <h3>Design Engineer</h3>
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
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link href="/carving">
                <a>Carving</a>
              </Link>
            </li>
            <li>
              <Link href="/media">
                <a>Media</a>
              </Link>
            </li>
          </ul>
        </nav>
        <a href="http://twitter.com/ruucm" target="_blank">
          @ruucm
        </a>
      </footer>
    </div>
  )
}
