import Link from "next/link"

export function Card({ title, duration, outlink, link }) {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          marginBottom: 10,
          padding: "30px 15px",
          display: "inline-block",
        }}
      >
        <h4
          style={{
            marginTop: 0,
          }}
        >
          {title}
          {duration && ` (${duration})`}
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus
          risus eu nisi finibus egestas. Vivamus nec pharetra urna. Mauris enim
          tortor, lacinia vel euismod iaculis, congue quis augue. In
          pellentesque mauris vel risus tempor, non porttitor arcu porttitor.
        </p>
        {link && (
          <Link href={link}>
            <a>More</a>
          </Link>
        )}
        {!link && (
          <a href={outlink} target="_blank">
            More (outlink)
          </a>
        )}
      </div>

      <br />
    </>
  )
}
