import Link from "next/link"
import { useHover } from "../hooks/use-hover"

export function Layout({ children }) {
  const [hoverRef, isHover] = useHover()

  return (
    <>
      <header>
        <Link href="/">
          <h2
            style={{
              background: "green",
              display: "inline-block",
              padding: 5,
              cursor: "pointer",
            }}
            ref={hoverRef}
          >
            {isHover ? "안녕 하세요," : "Hello,"}
            <br />
            I'm yongmin ruucm.
          </h2>
        </Link>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4fr 1fr",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            WebkitWritingMode: "vertical-rl",
            MsWritingMode: "tb-rl",
            writingMode: "vertical-rl",
          }}
        >
          <a href="http://twitter.com/ruucm" target="_blank">
            ruucm.a@gmail.com
          </a>
          <br />
          <a href="http://twitter.com/ruucm" target="_blank">
            @ruucm
          </a>
          {/* Navigation */}
          {/* <nav>
            <ul>
              <li>
                <Link href="/carving">
                  <a>Carving</a>
                </Link>
              </li>
              <li>
                <Link href="/media">
                  <a>Media</a>
                </Link>
              </li>
            </ul>
          </nav> */}
        </footer>
      </div>
    </>
  )
}
