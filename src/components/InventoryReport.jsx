import React from "react";
import { useInventoryContext } from "../contexts/InventoryProvider";

const InventoryReport = () => {
  const { qValues } = useInventoryContext();
  console.log("qValues", qValues);

  return (
    <>
      <h2>sample inventory report page</h2>
      <ul>
        {Object.entries(qValues).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default InventoryReport;
