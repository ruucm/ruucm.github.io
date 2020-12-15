import Link from "next/link"
import { motion } from "framer-motion"

const wrap = {
  active: {
    opacity: 1,
  },
  inActive: {
    opacity: 0,
  },
}

export function Card({ title, duration, description, outlink, link }) {
  return (
    <motion.div
      layoutId={title}
      transition={{
        duration: 0.36,
      }}
      style={{
        display: "inline-block",
      }}
    >
      <motion.div
        initial={wrap.inActive}
        animate={wrap.active}
        exit={wrap.inActive}
        transition={{
          duration: 0.36,
        }}
        style={{
          border: "1px solid black",
          padding: "30px 15px",
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
    </motion.div>
  )
}
