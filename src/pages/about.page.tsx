import React from "react"
import { Layout } from "../components"
// @ts-ignore
import ProfileSticker from "https://framerusercontent.com/modules/5EaLh0KVaiYgE67ROHLy/EUOIupBEZSxXvFrMhkvD/JgWSPuRfa.js"
import styled, { css } from "styled-components"

const ParagraphWithImage = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`
const ProfileWrap = styled.div`
  padding: 0 32px 32px 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export function AboutPage() {
  return (
    <Layout>
      <h3>About</h3>
      <ParagraphWithImage>
        <p>
          My story starts from making a simple android socket during the army
          services. It directly inspires me and gives me a sight of the internet
          world. I studied programming start from there.
          <br />
          <br />
          After the army services, I worked as a freelancer with designers as a
          wordpress developer. I enjoyed building pixel-perfect HTML & CSS works
          and making a productive way in terms of maintenance homepage. I
          created several wordpress plugins to make web pages and
          functionalities easily.
        </p>

        <ProfileWrap>
          <ProfileSticker
            style={{
              cursor: "pointer",
            }}
          />
        </ProfileWrap>
      </ParagraphWithImage>

      <p
        style={{
          marginTop: 0,
        }}
      >
        Then I met Framer. It broads my view of a lot of web worlds and designs.
        I made Harbor School and started to solve the pains of designers when
        they work with developers. So I've been teaching codes to designers in
        Harbor School, and sometimes I made a tool for them.
        <br />
        <br />
        I built Lighthouse Design System in this period. With the system, I can
        integrate the whole design and develop working processes seamlessly from
        the single truth of sources.
        <br />
        <br />
        I deeply understand each position of designer and engineer and have a
        passion for reducing the gap between resulting better products.
        <br />
        <br />I believe screens are everywhere and have more importance in our
        lives. So careful thoughts and toolings for the creators of the screens
        are essential, like making neat controllers for spaceship pilots to
        Mars.
      </p>
    </Layout>
  )
}
