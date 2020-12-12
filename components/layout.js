import Link from "next/link"

export function Layout({ children }) {
  return (
    <>
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
