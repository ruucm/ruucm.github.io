import React, { useState } from "react"
import { HomePage } from "./pages/home.page"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { LighthouseDesignSystemPage } from "./pages/portfolio/lighthouse-design-system.page"
import { HarborSchoolPage } from "./pages/portfolio/harbor-school.page"
import { FramerKoreaPage } from "./pages/portfolio/framer-korea.page"
import { SLEIPage } from "./pages/portfolio/seli.page"
import { PulsenPage } from "./pages/portfolio/pulsen.page"
import { CnyttanPage } from "./pages/portfolio/cnyttan.page"
import { VincentProjectPage } from "./pages/portfolio/vincent-project.page"
import { AboutPage } from "./pages/about.page"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio/vincent-project">
          <VincentProjectPage />
        </Route>
        <Route path="/portfolio/cnyttan">
          <CnyttanPage />
        </Route>
        <Route path="/portfolio/pulsen">
          <PulsenPage />
        </Route>
        <Route path="/portfolio/seli">
          <SLEIPage />
        </Route>
        <Route path="/portfolio/framer-korea">
          <FramerKoreaPage />
        </Route>
        <Route path="/portfolio/harbor-school">
          <HarborSchoolPage />
        </Route>
        <Route path="/portfolio/lighthouse-design-system">
          <LighthouseDesignSystemPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
