import React, { useEffect, useState, useContext } from "react";

const InventoryContext = React.createContext({});
export const useInventoryContext = () => useContext(InventoryContext);

const InventoryProvider = ({ children }) => {
  const [qValues, setQValues] = useState({});
  useEffect(() => {
    console.log("qValues", qValues);
  }, [qValues]);
  console.log("reached inventory provider");
  return (
    <InventoryContext.Provider value={{ qValues, setQValues }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
