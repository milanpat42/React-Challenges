import { useState } from "react";

function BabyForm(props) {
  const [currentName, setName] = useState("");
  const [currentSex, setSex] = useState("");

  function handleNameInput(event) {
    setName(event.target.value);
  }
  function handleSexInput(event) {
    setSex(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newBorn = { name: currentName, sex: currentSex};
    props.updateFunction(newBorn);
  }

  return (
    <div className="baby-name-from">
      <form>
        <input
          className="form-field form-item"
          type="text"
          placeholder="Name"
          value={currentName}
          onChange={handleNameInput}
        />
        <input
          className="form-field form-item"
          type="text"
          placeholder="Sex (m/f)"
          value={currentSex}
          onChange={handleSexInput}
        />
        <input
          type="submit"
          value="Register Me!"
          className="form-field submit-btn"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
export default BabyForm;
