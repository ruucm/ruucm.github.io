import React, { useState } from "react"
import { Card, Layout } from "../components"
import { cardDatas } from "../consts"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { removeA } from "../utils/removeA"
import profile from "../assets/profile.jpg"

export function AboutPage() {
  return (
    <Layout>
      <h3>About</h3>
      <img
        src={profile}
        style={{
          width: 200,
        }}
      />
    </Layout>
  )
}
