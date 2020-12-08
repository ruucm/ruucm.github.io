import Link from "next/link"

export function Card({ title, duration, outlink, link }) {
  return (
    <>
      <br />
      {title}
      {duration && ` (${duration})`}
      <br />→{" "}
      {link && (
        <Link href={link}>
          <a>More</a>
        </Link>
      )}
      {!link && (
        <a href={outlink} target="_blank">
          More
        </a>
      )}
    </>
  )
}
