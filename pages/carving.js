import Link from "next/link";
export default function About() {
  return (
    <div>
      <div>Carving 🧶</div>
      <h1>projects</h1>
      <h1>blocks</h1>
      <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}
