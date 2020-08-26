export default function Home() {
  return (
    <div>
      Hello
      <br />
      I'm yongmin ruucm.
      <br />
      <Card
        title="harbor.school"
        duration="2018 ~ "
        outlink="https://harbor.school"
      />
      <Card
        title="vincent project"
        duration="2014 ~ 2016"
        outlink="https://www.instagram.com/vincent.project/"
      />
    </div>
  );
}

function Card({ title, duration, outlink }) {
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
