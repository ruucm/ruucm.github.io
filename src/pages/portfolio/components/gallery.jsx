import * as React from "react"
import styled from "styled-components"

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export function Gallery({ images }) {
  return (
    <GridWrap>
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
    </GridWrap>
  )
}
