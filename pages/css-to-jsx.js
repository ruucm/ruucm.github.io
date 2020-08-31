import { useState } from "react";
import { transform } from "../utils/transform";

function CSSToJSX() {
  const [formValues, setFormValues] = useState({
    textarea0: "",
  });
  const [transformed, setTransformed] = useState("");

  function handleChange(event) {
    const target = event.target;
    const newValue = target.type === "checkbox" ? target.checked : target.value;
    console.log("newValue", newValue);
    const name = target.name;
    setFormValues({ ...formValues, [name]: newValue });
  }
  console.log("formValues", formValues);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let res = transform(`myCSS${formValues["textarea0"]}`);
        console.log("res", res);
        setTransformed(res["myCSS"]);
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <textarea
          placeholder={`{
  background: white;
  width: 30px;
  height: 30px;
  padding: 6px;
  border-radius: 100px;
}`}
          name="textarea0"
          value={formValues["textarea0"]}
          onChange={handleChange}
          rows={30}
        />
        <textarea value={JSON.stringify(transformed)} rows={30} />
      </div>

      <br />
      <input type="submit" />
    </form>
  );
}

export default CSSToJSX;
