import Link from "next/link"

export function Layout({ children }) {
  return (
    <>
      <h2>
        Hello
        <br />
        I'm yongmin ruucm.
      </h2>
      <main>{children}</main>
      <footer>
        {/* Navigation */}
        <nav>
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
        </nav>
        <a href="http://twitter.com/ruucm" target="_blank">
          @ruucm
        </a>
      </footer>
    </>
  )
}
