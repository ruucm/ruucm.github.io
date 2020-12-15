import * as React from "react"
import { useState, useRef } from "react"
import { motion, useDomEvent } from "framer-motion"

const defaultTransition = {
  duration: 0.36,
}

export function PortfolioSectionCard({
  img,
  title,
  description,
  grayscale = false,
}) {
  const [zoomed, setZoomed] = useState(false)

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: zoomed ? "1fr" : "2fr 3fr",
        gap: "30px",
      }}
    >
      <Image
        img={img}
        grayscale={grayscale}
        zoomed={zoomed}
        setZoomed={setZoomed}
      />
      <div
        style={{
          padding: "30px 15px",
        }}
      >
        <motion.h4
          style={{
            textDecoration: "underline",
            display: "inline-block",
          }}
          layout
          transition={defaultTransition}
        >
          {title}
        </motion.h4>
        <br />
        <motion.p layout transition={defaultTransition}>
          {description}
        </motion.p>
      </div>
    </div>
  )
}

const Image = ({ img, grayscale, zoomed, setZoomed }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingTop: "66.66%",
        cursor: zoomed ? "zoom-out" : "zoom-in",
        filter: grayscale ? "grayscale(1)" : "grayscale(0)",
      }}
    >
      <motion.div
        animate={{ opacity: zoomed ? 1 : 0 }}
        className="shade"
        onClick={() => setZoomed(false)}
      />
      <motion.img
        src={img}
        alt="Bimhuis in Amsterdam"
        onClick={() => setZoomed(!zoomed)}
        layout
        transition={defaultTransition}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  )
}
