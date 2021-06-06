import { useHover } from "../hooks/use-hover"
import { Link } from "react-router-dom"
import { contactMail } from "../consts"
import { useClipboard } from "../hooks/use-clipboard"

export function Layout({ children, home = false }) {
  const [hoverRef, isHover] = useHover()
  const { hasCopied, onCopy } = useClipboard(contactMail)

  return (
    <>
      <header>
        <Link to="/">
          <h2
            style={{
              // background: home ? "green" : "hsl(120 0% 65% / 1)",
              display: "inline-block",
              padding: 5,
              cursor: "pointer",
            }}
            ref={hoverRef}
          >
            {isHover ? "안녕 하세요," : "Hello,"}
            <br />
            <span
              style={{
                textDecoration: "underline",
              }}
            >
              I'm yongmin ruucm.
            </span>
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
          <div
            style={{
              position: "sticky",
              top: "10vh",
              display: "inline-block",
            }}
          >
            <a
              onClick={onCopy}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {hasCopied ? "copied" : contactMail}
            </a>
            <br />
            <a href="http://twitter.com/ruucm" target="_blank">
              @ruucm
            </a>
          </div>

          {/* <br /> */}
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
