import * as React from "react"

export function Summary({ title, role, links }) {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "inline-block",
        padding: "30px 15px",
      }}
    >
      <h3
        style={{
          color: "blue",
          fontWeight: 400,
          marginTop: 0,
        }}
      >
        {title}
      </h3>
      <p>Role - {role}</p>
      <p
        style={{
          marginBottom: 0,
        }}
      >
        Links -{" "}
        {links.map((link, id) => (
          <>
            <a
              href={link.href}
              target="_blank"
              style={{
                color: "black",
              }}
            >
              {link.text}
            </a>
            {id < links.length - 1 && ` / `}
          </>
        ))}
      </p>
    </div>
  )
}
