import { Link } from "react-router-dom"

import { motion } from "framer-motion"

const wrap = {
  active: {
    opacity: 1,
  },
  inActive: {
    opacity: 0,
  },
}

export function Card({ title, duration, description, outlink, slug, tags }) {
  return (
    <motion.div
      layoutId={title}
      transition={{
        duration: 0.36,
      }}
      style={
        {
          // background: "hsla(0, 0%, 100%, 0.4)",
        }
      }
    >
      <motion.div
        initial={wrap.inActive}
        animate={wrap.active}
        exit={wrap.inActive}
        transition={{
          duration: 0.36,
        }}
        style={{
          position: "relative",
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
        {slug && (
          <Link
            to={`/portfolio/${slug}`}
            style={{
              textDecoration: "none",
            }}
          >
            More
          </Link>
        )}
        {!slug && (
          <a
            href={outlink}
            target="_blank"
            style={{
              textDecoration: "none",
            }}
          >
            More (outlink)
          </a>
        )}
        <em
          style={{
            position: "absolute",
            right: 15,
            bottom: 8,
          }}
        >
          {tags.map((tag, id) => (
            <span key={id}>
              {tag}
              {id < tags.length - 1 && ","}{" "}
            </span>
          ))}
        </em>
      </motion.div>
    </motion.div>
  )
}
