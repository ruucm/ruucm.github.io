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
          <a>
            <button
              style={{
                lineHeight: "19px",
              }}
            >
              More →
            </button>
          </a>
        </Link>
      )}
      {!link && (
        <a href={outlink} target="_blank">
          <button>More ↗︎</button>
        </a>
      )}
    </>
  )
}
