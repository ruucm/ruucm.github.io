import * as React from "react"

export function PortfolioSectionCard({
  img,
  title,
  description,
  grayscale = false,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 3fr",
        gap: "30px",
        marginBottom: 30,
      }}
    >
      <img
        src={img}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          marginBottom: 30,
          border: "1px solid black",
          filter: grayscale ? "grayscale(1)" : "grayscale(0)",
        }}
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
