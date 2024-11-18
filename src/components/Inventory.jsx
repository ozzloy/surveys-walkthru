import React, { useState } from "react";
import { useInventoryContext } from "../contexts/InventoryProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Inventory = () => {
  const { setQValues } = useInventoryContext();
  const history = useHistory();
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setQValues(values);
    history.push("/report");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>sample inventory page</h2>
      <div className="inventory-question">
        <p className="inventory-prompt">
          i learn the most when the lesson engages my sense of{" "}
          <em>sight</em>
        </p>
        <Options name="q0" values={values} setValues={setValues} />
      </div>
      <div className="inventory-question">
        <p className="inventory-prompt">
          i learn the most when the lesson engages my sense of{" "}
          <em>hearing</em>
        </p>
        <Options name="q1" values={values} setValues={setValues} />
      </div>
      <div className="inventory-question">
        <p className="inventory-prompt">
          i learn the most when the lesson engages my sense of{" "}
          <em>touch taste or smell</em>
        </p>
        <Options name="q2" values={values} setValues={setValues} />
      </div>
      <button
        className="form-buttons"
        type="submit"
        disabled={!(values["q0"] && values["q1"] && values["q2"])}
      >
        submit
      </button>
    </form>
  );
};

const Options = ({ name, values, setValues }) => {
  return (
    <select
      className="inventory-select"
      name={name}
      onChange={(e) =>
        setValues({ ...values, [name]: e.target.value })
      }
      value={values[name] || "no choice selected"}
    >
      <option value="no choice selected" disabled>
        select one...
      </option>
      <option value={0}>strongly disagree</option>
      <option value={1}>disagree</option>
      <option value={2}>neutral</option>
      <option value={3}>agree</option>
      <option value={4}>strongly agree</option>
    </select>
  );
};

/**
    {
      "code": "q1",
      "type": "likert",
      "stem": "i learn the most when the lesson engages my sense of <em>sight</em>",
      "scale": "agreement"
    }
 */

export default Inventory;
