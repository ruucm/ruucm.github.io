import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

import("./imports.js").then(async (m) => {
  const App = (await import("./App")).default

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
})
