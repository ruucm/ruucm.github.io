import Link from "next/link"
import { motion } from "framer-motion"

export function Card({ title, duration, description, outlink, link }) {
  return (
    <motion.div
      key={title}
      layoutId={title}
      transition={{
        duration: 1,
      }}
      style={{
        border: "1px solid black",
        padding: "30px 15px",
        display: "inline-block",
      }}
    >
      <h4
        style={{
          marginTop: 0,
          textTransform: "lowercase",
        }}
      >
        {title}
        {duration && ` (${duration})`}
      </h4>
      <p>{description}</p>
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
    </motion.div>
  )
}
