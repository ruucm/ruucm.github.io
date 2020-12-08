import Link from "next/link"
import Image from "next/image"

export default function FreelanceWorks() {
  return (
    <div>
      <div>Freelance Works</div>
      <Image
        src="/assets/portfolio-1.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}
