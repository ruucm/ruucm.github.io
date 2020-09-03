export function Card({ title, duration, outlink }) {
  return (
    <>
      <br />
      {`${title} (${duration})`}
      <br />→{" "}
      <a href={outlink} target="_blank">
        More
      </a>
    </>
  );
}
