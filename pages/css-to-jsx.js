import { useState, useEffect } from "react";
import { transform } from "../utils/transform";
import { useKeyPress } from "../hooks/use-key-press";

function CSSToJSX() {
  const [formValues, setFormValues] = useState({
    textarea0: "",
  });
  const [transformed, setTransformed] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    const target = event.target;
    const newValue = target.type === "checkbox" ? target.checked : target.value;
    console.log("newValue", newValue);
    const name = target.name;
    setFormValues({ ...formValues, [name]: newValue });
  }
  function handleSubmit() {
    try {
      let res = transform(`myCSS${formValues["textarea0"]}`);
      console.log("res", res);
      setTransformed(res["myCSS"]);
      setError("");
    } catch (error) {
      console.error("error on transform", error);
      setError(error.message);
    }
  }
  // const enterPress = useKeyPress("Enter");
  // useEffect(() => {
  //   if (enterPress) handleSubmit();
  // }, [enterPress]);

  console.log("formValues", formValues);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
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
        <textarea value={JSON.stringify(transformed)} rows={30} readOnly />
      </div>

      <br />
      {error && (
        <div
          style={{
            fontWeight: 700,
            color: "red",
          }}
        >
          {error}
        </div>
      )}
      <br />
      <input type="submit" />
    </form>
  );
}

export default CSSToJSX;
