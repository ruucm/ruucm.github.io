import * as React from "react"
import { useState } from "react"

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
      <img
        src={img}
        style={{
          height: zoomed ? 300 : "100%",
          width: "100%",
          objectFit: "cover",
          border: "1px solid black",
          filter: grayscale ? "grayscale(1)" : "grayscale(0)",
          cursor: zoomed ? "zoom-out" : "zoom-in",
        }}
        onClick={() => setZoomed(!zoomed)}
      />
      <div
        style={{
          padding: "30px 15px",
        }}
      >
        <h4
          style={{
            textDecoration: "underline",
          }}
        >
          {title}
        </h4>
        {description}
      </div>
    </div>
  )
}
