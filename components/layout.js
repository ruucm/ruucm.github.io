import Link from "next/link"

export function Layout({ children }) {
  return (
    <>
      <h2
        style={{
          background: "green",
          display: "inline-block",
        }}
      >
        Hello
        <br />
        I'm yongmin ruucm.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
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
