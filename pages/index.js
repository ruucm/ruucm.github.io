import Link from "next/link";
import { Card } from "../components/card";

export default function Home() {
  return (
    <div>
      Hello
      <br />
      I'm yongmin ruucm.
      <br />
      {/* Navigation */}
      <Link href="/carving" as={process.env.BACKEND_URL + "/"}>
        <a>Carving</a>
      </Link>
      <Link href="/media" as={process.env.BACKEND_URL + "/"}>
        <a>Media</a>
      </Link>
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
      {/* class101


harbor.school (version 2)
harbor.school (version 1)
harbor.school (version 0) - wordpress


Harbor Pin

Youtube?


      Framer Korea Meetup 2
      Framer Korea Meetup 1 */}
    </div>
  );
}
