import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { HelmetProvider } from "react-helmet-async"

import("./imports.js").then(async (m) => {
  const App = (await import("./App")).default

  ReactDOM.render(
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>,
    document.getElementById("root")
  )
})
