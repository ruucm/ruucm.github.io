import Link from "next/link"

export function Card({ title, duration, outlink, link }) {
  return (
    <>
      <h4>
        {title}
        {duration && ` (${duration})`}
      </h4>
      {link && (
        <Link href={link}>
          <a>More</a>
        </Link>
      )}
      {!link && (
        <a href={outlink} target="_blank">
          More (outlink)
        </a>
      )}
    </>
  )
}
