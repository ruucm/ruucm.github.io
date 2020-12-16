import * as React from "react"
import { useRouter } from "next/router"
import { cardDatas } from "../../../consts"

export function Summary() {
  const router = useRouter()
  const slug = router.pathname.split("/")[2]
  const data = findValueByKey(cardDatas, "slug", slug)

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
        {data.title} ({data.duration})
      </h3>
      <p>Role - {data.role}</p>
      <p>
        Links -{" "}
        {data.links.map((link, id) => (
          <span key={id}>
            <a
              href={link.href}
              target="_blank"
              style={{
                color: "black",
              }}
            >
              {link.text}
            </a>
            {id < data.links.length - 1 && ` / `}
          </span>
        ))}
      </p>
      <p
        style={{
          marginBottom: 0,
        }}
      >
        {data.description}
      </p>
    </div>
  )
}

function findValueByKey(arr, key, match) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element[key] === match) return element
  }
}
