import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import styled, { css } from "styled-components"

const defaultTransition = {
  duration: 0.36,
}

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 30px;
  direction: ltr;
  /* align-items: center; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  ${({ zoomed }) =>
    zoomed &&
    css`
      grid-template-columns: 1fr;
    `}
`

const Description = styled.div`
  padding: 30px 15px;

  @media (max-width: 768px) {
    padding-top: 0px;
  }
`

export function PortfolioSectionCard({
  img,
  title,
  description,
  grayscale = false,
  alignRight = false,
}) {
  const [zoomed, setZoomed] = useState(false)

  return (
    <GridWrap zoomed={zoomed}>
      <Image
        img={img}
        grayscale={grayscale}
        zoomed={zoomed}
        setZoomed={setZoomed}
      />
      <Description>
        <motion.h4
          style={{
            textDecoration: "underline",
            display: "inline-block",
            fontWeight: 400,
          }}
          layout
          transition={defaultTransition}
        >
          {title}
        </motion.h4>
        <br />
        <motion.p
          layout
          transition={defaultTransition}
          style={{
            lineHeight: "1.55em",
          }}
        >
          {description}
        </motion.p>
      </Description>
    </GridWrap>
  )
}

const Image = ({ img, grayscale, zoomed, setZoomed }) => {
  let filter = ""
  if (grayscale) filter += "grayscale(1) brightness(0.5)"
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingTop: "66.66%",
        cursor: zoomed ? "zoom-out" : "zoom-in",
        filter,
        // opacity: grayscale ? 0.5 : 1,
      }}
    >
      <motion.div
        animate={{ opacity: zoomed ? 1 : 0 }}
        className="shade"
        onClick={() => setZoomed(false)}
      />
      <motion.img
        src={img}
        alt=""
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
          border: "1px solid black",
        }}
      />
    </div>
  )
}
