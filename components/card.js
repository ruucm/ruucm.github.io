export function Card({ title, duration, outlink }) {
  return (
    <>
      <br />
      {title}
      {duration && ` (${duration})`}
      <br />→{" "}
      <a href={outlink} target="_blank">
        More
      </a>
    </>
  );
}
