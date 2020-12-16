import * as React from "react"

export function Gallery({ images }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        marginTop: 30,
        gap: 30,
        marginBottom: 30,
      }}
    >
      {images.map((image, id) => (
        <img
          key={id}
          src={image}
          style={{
            width: "100%",
            display: "block",
            border: "1px solid black",
          }}
        />
      ))}
    </div>
  )
}
