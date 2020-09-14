import Link from "next/link";
import { Card } from "../components/card";

export default function Carving() {
  return (
    <div>
      <div>Carving 🧶</div>
      <h1>projects</h1>
      <h1>blocks</h1>
      <h1>tools</h1>
      <Card title="CSS to JSX" duration="" outlink="/css-to-jsx" />
      <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}
