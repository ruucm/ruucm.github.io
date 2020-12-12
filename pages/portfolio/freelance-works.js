import Link from "next/link"

export default function FreelanceWorks() {
  return (
    <div>
      <div>Freelance Works</div>
      <img
        src={require("../../assets/portfolio-1.jpeg")}
        style={{
          display: "block",
          width: 300,
        }}
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
